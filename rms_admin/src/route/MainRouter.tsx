import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  LoginContainer,
  ModalContainer,
  ViewPlanListContainer,
  ViewReportListContainer,
} from "../containers";

const MainRouter = () => {
  return (
    <>
      <ModalContainer/>
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
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
