import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { ViewPlan } from '../../components';
import Header from '../../components/header/Header';
import { GET_DETAIL_PLAN } from '../../modules/redux/action/plan/interface';
import UseDetailPlan from '../../util/hooks/plan';

type DetailPlanParams = {
  id: string;
};

const ViewPlanContainer: FC = () => {
  const { state, setState } = UseDetailPlan();
  const { id } = useParams<DetailPlanParams>();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.error?.statusCode === 401) {
      alert('로그인 후 이용해주세요.');
      history.push('/');
    } else if (state.error?.statusCode === 403) {
      alert('권한이 없습니다.');
      history.goBack();
    } else if (state.error?.statusCode === 404) {
      alert('존재하지 않는 계획서 입니다.');
      history.goBack();
    }
  }, [state.error]);

  useEffect(() => {
    setState.setId(id);
  }, [id]);

  useEffect(() => {
    dispatch({ type: GET_DETAIL_PLAN });
  }, [state.id]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <ViewPlan {...state} />
    </Suspense>
  );
};

export default ViewPlanContainer;
