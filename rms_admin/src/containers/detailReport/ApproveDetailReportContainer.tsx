import React, { FC, Suspense } from 'react';
import ApproveDetailReport from '../../components/approveDetailReport';

const ApproveDetailReportContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApproveDetailReport />
    </Suspense>
  );
};

export default ApproveDetailReportContainer;
