import React, { FC, Suspense } from "react";
import { ViewPlanList } from "../../components";

const ViewPlanListContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewPlanList />
    </Suspense>
  );
};

export default ViewPlanListContainer;
