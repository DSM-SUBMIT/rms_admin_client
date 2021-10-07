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
  ViewApprovePlanContainer,
} from '../containers';

const MainRouter = () => {

  return (
    <>
      <Modal/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LoginContainer} />
          <Route exact path='/view/plan-list' component={ViewPlanListContainer} />
          <Route exact path='/view/report-list' component={ViewReportListContainer} />
          <Route exact path='/view/detail-plan/:id' component={ViewPlanContainer} />
          <Route exact path='/search' component={SearchProjectListContainer} />
          <Route exact path='/view/project-list' component={ViewProjectListContainer} />
          <Route exact path='/view/detail-report/:id' component={DetailReportContainer} />
          <Route
            exact
            path='/view/approve-detail-report/:id'
            component={ApproveDetailReportContainer}
          />
          <Route exact path='/view/approve-detail-plan/:id' component={ViewApprovePlanContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
