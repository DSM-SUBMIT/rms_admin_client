import React, { FC, useMemo } from 'react';
import { SUBTITLE } from '../../constance/detailReport';
import MarkdownRender from './markdown/MarkdownRender';
import * as S from './style';

interface Props {
  isSecondPage?: boolean;
  content: string;
}

const WritedReport: FC<Props> = props => {
  const { isSecondPage, content } = props;
  const subTitle = useMemo(() => {
    if (isSecondPage)
      return (
        <S.ReportContentTitle>
          <span>※</span>
          {SUBTITLE}
        </S.ReportContentTitle>
      );
  }, [isSecondPage]);

  return (
    <S.ReportPage>
      {subTitle}
      <S.ReportContentBox isSecondPage={isSecondPage}>
      <MarkdownRender markdown={content} />
      </S.ReportContentBox>
    </S.ReportPage>
  );
};

export default WritedReport;
