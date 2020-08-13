import React from "react";
import loginForm from "../styles/loginForm.module.css";
const LoginForm = () => {
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
            value=""
          />
          <input
            className={loginForm.buttonLets}
            type="button"
            value="LETS PLAY"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
