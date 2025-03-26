import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import photo from "../assets/Moi.png";

export default function Home() {
  return (
    <div className="home">
      <Nav />
      <div className="txt">
        <h1 className="bonjour">Bonjour !!!</h1>
        <br />
        <h2 className="titleh2">Je m'appelle Yohan Rosano</h2>
        <br />
        <p className="phraseIntro">
          Je suis un développeur full stack JS, je crée des sites web ou des
          applications dynamiques. Découvrez mon travail et ensemble, créons le
          web de demain !
        </p>
        <div className="divButton">
          <Link to="/about">
            <button type="button" className="styleButton">
              A propos de moi
            </button>
          </Link>
          <Link to="/projets">
            <button type="button" className="styleButton">
              Mes Projets
            </button>
          </Link>
        </div>
      </div>
      <div className="photo">
        <img className="image" alt="PhotoDeMoi" src={photo} />
      </div>
    </div>
  );
}
