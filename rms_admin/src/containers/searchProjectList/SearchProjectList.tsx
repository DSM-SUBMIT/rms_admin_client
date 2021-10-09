import React, { FC, Suspense, useEffect } from "react";
import { SearchProjectList } from "../../components";
import useSearchProject from "../../util/hooks/searchProject/useSearchProject";

const SearchProjectListContainer: FC = () => {
  const { setState, state } = useSearchProject();

  useEffect(() => {
    setState.getSearchProject();
  }, [state.query]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchProjectList {...state} {...setState}/>
    </Suspense>
  );
};

export default SearchProjectListContainer;