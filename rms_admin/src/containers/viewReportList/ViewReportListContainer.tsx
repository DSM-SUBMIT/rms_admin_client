import React, { FC, Suspense } from "react";
import { ViewReportList } from "../../components";

const ViewReportListContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewReportList />
    </Suspense>
  );
};

export default ViewReportListContainer;
