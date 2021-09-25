import React, { FC, Suspense } from "react";
import { ViewProjectList } from "../../components";

const ViewProjectListContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewProjectList />
    </Suspense>
  );
};

export default ViewProjectListContainer;
