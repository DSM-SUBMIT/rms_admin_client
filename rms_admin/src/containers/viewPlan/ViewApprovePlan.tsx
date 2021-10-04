import React, { FC, Suspense } from 'react';
import { ViewApprovePlan } from '../../components/viewPlan';

const ViewApprovePlanContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewApprovePlan />
    </Suspense>
  );
};

export default ViewApprovePlanContainer;
