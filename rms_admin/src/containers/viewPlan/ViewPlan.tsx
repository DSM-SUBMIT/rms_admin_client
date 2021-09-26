import React, { FC, Suspense } from "react";
import { ViewPlan } from "../../components";
import FeedbackModal from "../../components/modal/feedback";

const ViewPlanContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewPlan/>
    </Suspense>
  );
};

export default ViewPlanContainer;
