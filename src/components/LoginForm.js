// @flow
import React, { useState } from "react";
import loginForm from "../styles/loginForm.module.css";

type Props = {
  createGame: Function,
};

const LoginForm = ({ createGame }: Props) => {
  const [name, setName] = useState("");

  return (
    <div className={loginForm.container}>
      <div className={loginForm.loginContainer}>
        <div>
          <h1 className={loginForm.title}>Welcome to Bons Game</h1>
          <h3 className={loginForm.subtitle}>What's your name?</h3>
        </div>
        <div className={loginForm.inputContainer}>
          <input
            className={loginForm.inputName}
            type="text"
            placeholder="NAME"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className={loginForm.buttonLets}
            type="button"
            value="LETS PLAY"
            onClick={() => {
              if (name.trim().length !== 0) createGame(name);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
