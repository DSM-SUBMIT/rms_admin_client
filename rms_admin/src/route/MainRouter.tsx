import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  LoginContainer, ViewPlanListContainer
} from '../containers';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/login" component={LoginContainer}/>
          <Route path="/view/planList" component={ViewPlanListContainer}/>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;