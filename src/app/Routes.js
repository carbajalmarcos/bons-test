import React from "react";
import Login from "./pages/Login";
import Gameboard from "./pages/GameBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "../model/client";
const Routes = () => {
  return (
    <ApolloProvider client={client} data-test="app-component">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/gameboard" component={Gameboard} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default Routes;
