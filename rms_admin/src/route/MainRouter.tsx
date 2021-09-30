import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LoginContainer} />
          <Route exact path='/view/planList' component={ViewPlanListContainer} />
          <Route exact path='/view/reportList' component={ViewReportListContainer} />
          <Route exact path='/view/plan' component={ViewPlanContainer} />
          <Route exact path='/search' component={SearchProjectListContainer} />
          <Route exact path='/view/projectList' component={ViewProjectListContainer} />
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
