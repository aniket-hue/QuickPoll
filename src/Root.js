import React from "react";
import { Route, Switch } from "react-router";
import Header from "./Component/Header";
import CreatePoll from "./views/Create";
import CurrentPoll from "./views/CurrentPoll";
import Links from "./views/Links";
import { BrowserRouter } from "react-router-dom";

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={CreatePoll} exact />
          <Route path="/links/:id" component={Links} />
          <Route path="/poll/:id" component={CurrentPoll} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Root;
