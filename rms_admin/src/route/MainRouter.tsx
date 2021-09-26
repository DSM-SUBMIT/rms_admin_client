import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  LoginContainer,
  ViewPlanContainer,
  ViewPlanListContainer,
  ViewReportListContainer,
} from "../containers";

const MainRouter = () => {
  return (
    <>
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
          <Route exact path="/view/plan" component={ViewPlanContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
