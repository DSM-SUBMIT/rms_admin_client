import React, { FC, useEffect, useState } from 'react';
import DetailPlanState from '../../modules/redux/reducer/plan/interface';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import * as S from './style';
import SoloPlanTable from './planTable/SoloPlanTable';
import TeamPlanTable from './planTable/TeamPlanTable';
import FeedbackModal from '../modal/feedback';
import { useModal } from '../../util/hooks/modal';
import { useHistory } from 'react-router';
import { Header } from '../header/style';

const ViewPlan: FC<DetailPlanState> = props => {
  const [isFeedbackModalClick, setIsFeedbackModalClick] = useState<boolean>(false);
  const modalState = useModal().state;
  const history = useHistory();

  useEffect(() => {
    if (modalState.isSuccessSaveFeedback) {
      history.push('/view/plan-list');
      alert('승인/미승인을 성공하였습니다.');
    } else if (modalState.isSuccessSaveFeedback === false) {
      if (modalState.error?.statusCode === 409) {
        alert('이미 승인 여부가 결정된 프로젝트입니다.');
        history.push('/view/plan-list');
        window.location.reload();
      } else {
        alert('승인/미승인을 실패하였습니다. 다시 시도해 주세요.');
      }
    }
  }, [modalState.isSuccessSaveFeedback]);

  const feedbackBtnClickHandler = () => {
    setIsFeedbackModalClick(true);
  };

  const onClickPdfDownload = () => {
    const plan = document.getElementById('planTable')!;

    html2canvas(plan).then(canvas => {
      let pageWidth = 210;
      let pageHeight = 297;
      let imgWidth = pageWidth * 0.9;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      const planImg = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm');
      let position = 0;

      pdf.addImage(planImg, 'PNG', 10, position + 10, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(planImg, 'PNG', 10, position + 18, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`${props.projectName}.pdf`);
    });
  };

  return (
    <>
      <Header />
      {isFeedbackModalClick && <FeedbackModal type={'plan'} setClose={setIsFeedbackModalClick} />}
      <S.ViewPlanWrapper>
        <S.PlanTableWrapper>
          {props.isIndividual ? <SoloPlanTable {...props} /> : <TeamPlanTable {...props} />}
        </S.PlanTableWrapper>
        <S.ButtonsWrapper>
          <S.Button onClick={feedbackBtnClickHandler}>승인/미승인</S.Button>
          <S.Button onClick={onClickPdfDownload}>다운로드</S.Button>
        </S.ButtonsWrapper>
      </S.ViewPlanWrapper>
    </>
  );
};

export default ViewPlan;
