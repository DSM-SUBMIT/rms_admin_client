import React, { FC, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header/Header';
import ReportFirstPage from './ReportFirstPage';
import WritedReport from './WritedReport';
import { BTN, DOWNLOADING, VIDEODOWNLOAD } from '../../constance/detailReport';
import { video } from '../../asset/detailReport';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useHistory, useLocation } from 'react-router-dom';
import { getDownloadFile } from '../../util/api/detailReport';

interface Props {
  content: string;
  projectName: string;
  writer: string;
  isIndividual: boolean;
  writerStdNumber: number;
}

const DetailReport: FC<Props> = props => {
  const { content, projectName, writer, isIndividual, writerStdNumber } = props;
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const history = useHistory();
  const id = useLocation().pathname.slice(20);

  const videoDownloadBtnClickHandler = () => {
    getDownloadFile(id, projectName);
    setIsDownloading(true);
  };

  const makeContentArray = useMemo(() => {
    let contentArray: Array<string> = [];
    contentArray = content.split('!@#$%');
    return contentArray;
  }, [content]);

  const viewPlanBtnClickHandler = () => {
    history.push(`/view/plan/${id}`);
  };

  const downloadBtnClickHandler = () => {
    (document.getElementById('pdf') as HTMLElement).style.padding = '0px';
    html2canvas(document.getElementById('pdf') as HTMLElement).then(canvas => {
      let imgData = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      let imgWidth = 210;
      let pageHeight = imgWidth * 1.414;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 20) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('report.pdf');
    });
    (document.getElementById('pdf') as HTMLElement).style.paddingTop = '54px';
  };

  return (
    <S.DetailReport>
      <Header />
      <S.Pages id='pdf'>
        <ReportFirstPage
          projectName={projectName}
          writer={writer}
          isIndividual={isIndividual}
          writerStdNumber={writerStdNumber}
        />
        {makeContentArray.map((data: string, id: number) => {
          return <WritedReport isSecondPage={id === 0 ? true : false} content={data} />;
        })}
      </S.Pages>
      <S.BtnLine>
        <div>
          <S.VideoImg src={video} onClick={videoDownloadBtnClickHandler} />
          <S.VideoDownload onClick={videoDownloadBtnClickHandler}>
            {VIDEODOWNLOAD}
            {isDownloading && (
              <S.DownloadingMessage>
                <br />
                {DOWNLOADING}
              </S.DownloadingMessage>
            )}
          </S.VideoDownload>
        </div>
        <div>
          {BTN.map(data => {
            return (
              <S.Btn
                key={data.id}
                onClick={data.id === 'download' ? downloadBtnClickHandler : viewPlanBtnClickHandler}
              >
                <p>{data.content}</p>
              </S.Btn>
            );
          })}
        </div>
      </S.BtnLine>
    </S.DetailReport>
  );
};

export default DetailReport;
