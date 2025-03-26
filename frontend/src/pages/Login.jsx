import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import instance from "../../instance";
import Header from "../components/Header/Header";

export default function Login() {
  const [loginUser, setLoginUser] = useState({ pseudo: "", password: "" });
  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    instance
      .post("/login", loginUser)
      .then((res) => sessionStorage.setItem("token", res.data.token))
      .then(() => navigate("/admin"))
      .catch((err) => console.error(err));
  };
  return (
    <div className="login">
      <Header />
      <div className="login-box">
        <div className="form-login">
          <h1 className="title-login">Login</h1>
          <form className="form-log" onSubmit={handleLogin}>
            <label className="pseudo-log" htmlFor="pseudo">
              Pseudo :
            </label>
            {/* Pseudo :{" "} */}
            <input
              onChange={handleChangeLogin}
              className="input-log"
              type="text"
              name="pseudo"
              required
            />
            <label className="pw-log" htmlFor="mdp">
              Password :
            </label>
            <input
              className="input-log"
              type="password"
              name="password"
              onChange={handleChangeLogin}
              required
            />
            <button className="btn-login" type="submit">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
