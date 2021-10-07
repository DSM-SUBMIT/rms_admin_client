import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Modal from '../components/modal/Modal';
import {
  LoginContainer,
  ViewPlanContainer,
  ViewPlanListContainer,
  ViewReportListContainer,
  SearchProjectListContainer,
  ViewProjectListContainer,
  DetailReportContainer,
  ApproveDetailReportContainer,
} from '../containers';

const MainRouter = () => {
  return (
    <>
      <Modal />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginContainer} />
          <Route exact path='/view/plan-list' component={ViewPlanListContainer} />
          <Route exact path='/view/report-list' component={ViewReportListContainer} />
          <Route exact path='/view/plan' component={ViewPlanContainer} />
          <Route exact path='/search' component={SearchProjectListContainer} />
          <Route exact path='/view/project-list' component={ViewProjectListContainer} />
          <Route exact path='/view/detail-report/:id' component={DetailReportContainer} />
          <Route
            exact
            path='/view/approve-detail-report/:id'
            component={ApproveDetailReportContainer}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
