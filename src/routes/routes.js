import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeroDetails from "../pages/pg-HeroDetails";
import SearchPage from "../pages/pg-SearchPage";

const routes = [
  {
    path: `/`,
    component: SearchPage,
  },
  {
    path: `/characters/:characterid`,
    component: HeroDetails,
  },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, component: Component }) => {
          return <Route exact path={path} key={path} component={Component} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
