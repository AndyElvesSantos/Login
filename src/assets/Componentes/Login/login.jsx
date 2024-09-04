import React from "react";
import { FaUser, FaLock } from "react-icons/fa6";
import { useState } from "react";

import "./login.css";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const Submit = (event) => {
    event.preventDefault();

    alert(
      "Enviando os dados: " + "Usuário:" + userName + " " + "Senha:" + password
    );
  };
  return (
    <div className="container">
      <form onSubmit={Submit}>
        <h1>Acesse o Sistema</h1>
        <div className="input-login">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-login">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="lembrar-mim">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a Senha?</a>
        </div>
        <button>Entrar</button>
        <div className="sem-conta">
          <p>
            Não tem uma conta?<a href="#">Cadastre-se</a>
          </p>
        </div>
      </form>
    </div>
  );
}
