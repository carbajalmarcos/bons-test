import React from "react";
import Login from "./containers/Login";
import Gameboard from "./containers/GameBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./model/client";
const Routes = () => {
  return (
    <ApolloProvider client={client}>
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
