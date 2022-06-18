import React from "react";
import { FiLogIn } from "react-icons/fi";
import "./style.css";
import heroesImg from "../../assets/heroes.png";
import logoHero from "../../assets/logo.svg";
export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoHero} alt="Logo Bethe Hero" />
        <form action="">
          <h1>Faça seu cadastro</h1>
          <input placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>
        <a href="/register">
          <FiLogIn size={16} color="#e02041" />
          Não tenho cadastro
        </a>
        </form>
      </section>
      <img src={heroesImg} alt="Imagem Heroes" />
    </div>
  );
}
