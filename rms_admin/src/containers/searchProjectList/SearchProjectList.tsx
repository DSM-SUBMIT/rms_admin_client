import React, { FC, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SearchProjectList } from "../../components";
import { GET_SEARCH_PROJECT } from "../../modules/redux/action/searchProject/interface";
import useSearchProject from "../../util/hooks/searchProject/useSearchProject";

const SearchProjectListContainer: FC = () => {
  const { state, setState } = useSearchProject();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: GET_SEARCH_PROJECT });
  }, [ state.page, state.query]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchProjectList {...state} {...setState}/>
    </Suspense>
  );
};

export default SearchProjectListContainer;