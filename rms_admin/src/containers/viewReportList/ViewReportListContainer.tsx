import React, { FC, Suspense, useEffect } from 'react';
import { ViewReportList } from '../../components';
import useReportList from '../../util/hooks/reportList/useReportList';

const ViewReportListContainer: FC = () => {
  const { state, setState } = useReportList();

  useEffect(() => {
    setState.setReportList();
  }, [state.page]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewReportList {...state} {...setState} />
    </Suspense>
  );
};

export default ViewReportListContainer;
