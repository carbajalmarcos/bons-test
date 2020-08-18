import React, { useEffect } from "react";
import LogingForm from "../components/LoginForm";
import { useCreateGame } from "../../model/customGqlHooks";
import { useHistory } from "react-router-dom";
import Modal from "../components/Modal";
import Spinner from "../components/Spinner";

const Login = () => {
  const [createGame, { data, loading, error }] = useCreateGame();
  const history = useHistory();

  const handleCreateGame = (name) => {
    createGame({ variables: { name } });
  };

  const handleOnclose = () => {
    history.push("/");
  };

  useEffect(() => {
    if (data && !loading) {
      history.push("gameboard");
    }
  }, [data, loading]);

  if (error) {
    return (
      <Modal
        content={<p>{error.message}</p>}
        onClose={handleOnclose}
        data-test="modal"
      />
    );
  }
  return (
    <>
      {loading && <Spinner data-test="login-spinner" />}
      <LogingForm createGame={handleCreateGame} />;
    </>
  );
};

export default Login;
