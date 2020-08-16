import React, { useEffect } from "react";
import LogingForm from "../components/LoginForm";
import { useCreateGame } from "../model/customGqlHooks";
import { useHistory } from "react-router-dom";
import Modal from "../components/Modal";
import Spinner from "../components/Spinner";

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

  if (error) {
    return <Modal content={<p>{error.message}</p>} />;
  }
  return (
    <>
      {loading && <Spinner />}
      <LogingForm createGame={handleCreateGame} />;
    </>
  );
};

export default Login;
