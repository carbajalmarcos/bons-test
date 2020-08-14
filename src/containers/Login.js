import React, { forwardRef, useEffect } from "react";
import LogingForm from "../components/LoginForm";
import { CREATE_GAME } from "../model/mutations";
import { useCreateGame } from "../model/customGqlHooks";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [createGame, { data, loading, error }] = useCreateGame();
  const history = useHistory();

  const handleCreateGame = (name) => {
    createGame({ variables: { name } });
  };

  useEffect(() => {
    if (data && !loading) {
      history.push("gameboard");
    }
  }, [data, loading]);

  return <LogingForm createGame={handleCreateGame} loading={loading} />;
};

export default Login;
