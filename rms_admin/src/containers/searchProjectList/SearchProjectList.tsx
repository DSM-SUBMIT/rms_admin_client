import React, { FC, Suspense } from "react";
import { SearchProjectList } from "../../components";

const SearchProjectListContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchProjectList />
    </Suspense>
  );
};

export default SearchProjectListContainer;
