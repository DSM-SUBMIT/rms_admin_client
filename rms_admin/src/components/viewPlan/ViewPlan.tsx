import React, { FC } from 'react';
import DetailPlanState from '../../modules/redux/reducer/plan/interface';
import ProjectMember from './projectMember/ProjectMember';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import * as S from './style';
import SoloPlanTable from './planTable/SoloPlanTable';
import TeamPlanTable from './planTable/TeamPlanTable';

const ViewPlan: FC<DetailPlanState> = props => {
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
      <S.ViewPlanWrapper>
        <S.PlanTableWrapper>
          {props.isIndividual ? <SoloPlanTable {...props} /> : <TeamPlanTable {...props} />}
        </S.PlanTableWrapper>
        <S.ButtonsWrapper>
          <S.Button onClick={onClickPdfDownload}>다운로드</S.Button>
        </S.ButtonsWrapper>
      </S.ViewPlanWrapper>
    </>
  );
};

export default ViewPlan;
