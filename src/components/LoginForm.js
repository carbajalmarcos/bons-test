import React, { useState, useRef } from "react";
import loginForm from "../styles/loginForm.module.css";
import { PropagateLoader } from "react-spinners";

const LoginForm = ({ createGame, loading }) => {
  const inputRef = useRef(null);

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
            ref={inputRef}
          />
          <input
            className={loginForm.buttonLets}
            type="button"
            value="LETS PLAY"
            onClick={() => {
              createGame(inputRef.current.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
