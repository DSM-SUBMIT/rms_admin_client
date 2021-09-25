import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  LoginContainer,
  ModalContainer,
  ViewPlanListContainer,
  ViewReportListContainer,
  SearchProjectListContainer,
  ViewProjectListContainer
} from "../containers";

const MainRouter = () => {
  return (
    <>
      {/* <ModalContainer/> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route
            exact
            path="/view/planList"
            component={ViewPlanListContainer}
          />
          <Route
            exact
            path="/view/reportList"
            component={ViewReportListContainer}
          />
          <Route
            exact
            path="/search/project"
            component={SearchProjectListContainer}
          />
          <Route
            exact
            path="/view/projectList"
            component={ViewProjectListContainer}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
