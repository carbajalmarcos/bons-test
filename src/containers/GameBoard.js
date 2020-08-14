import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useGetGame } from "../model/customGqlHooks";
import { useHistory } from "react-router-dom";
const Gameboard = () => {
  const { loading, error, data } = useGetGame();
  const history = useHistory();

  //if data is undefined then redirect to login
  useEffect(() => {
    if (!data) {
      history.push("/");
    }
  }, [data]);

  return <div>el gameboard</div>;
};

export default Gameboard;
