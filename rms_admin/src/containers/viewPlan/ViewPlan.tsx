import React, { FC, Suspense } from "react";
import { ViewPlan } from "../../components";

const ViewPlanContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewPlan/>
    </Suspense>
  );
};

export default ViewPlanContainer;
