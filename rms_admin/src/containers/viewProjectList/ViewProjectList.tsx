import React, { FC, Suspense, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { ViewProjectList } from "../../components";
import { GET_VIEW_PROJECT } from "../../modules/redux/action/viewProject/interface";
import { useViewProject } from "../../util/hooks/viewProject";

const ViewProjectListContainer: FC = () => {
  const { state, setState } = useViewProject();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: GET_VIEW_PROJECT});
  }, [state.page]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewProjectList {...state} {...setState}/>
    </Suspense>
  );
};

export default ViewProjectListContainer;