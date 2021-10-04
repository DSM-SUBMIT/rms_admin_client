import React, { FC, Suspense, useEffect } from 'react';
import { ViewPlanList } from '../../components';
import usePlanList from '../../util/hooks/planList/usePlanList';

const ViewPlanListContainer: FC = () => {
  const { setState, state } = usePlanList();

  useEffect(() => {
    setState.setPlanList();
  }, [state.page]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewPlanList {...state} {...setState}/>
    </Suspense>
  );
};

export default ViewPlanListContainer;
