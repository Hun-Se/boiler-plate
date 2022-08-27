import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";

function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    Axios.post("/api/users/login", body).then((response) => {});
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label>Email</label>
      <input type="email" value={Email} onChange={onEmailHandler} />
      <label>Password</label>
      <input type="password" value={Password} onChange={onPasswordHandler} />
      <button>Login</button>
    </form>
  );
}

export default LoginPage;
