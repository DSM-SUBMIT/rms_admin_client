import React, { FC, Suspense } from 'react';
import { ApproveDetailReport } from '../../components/detailReport';

const ApproveDetailReportContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApproveDetailReport />
    </Suspense>
  );
};

export default ApproveDetailReportContainer;
