import React from "react";
import BoxCompetences from "../components/BoxCompetences";
import "./Competences.css";
import Header from "../components/Header/Header";
import css from "../assets/css.png";
import html from "../assets/html-5.png";
import Logojs from "../assets/js.png";
import logopy from "../assets/python.png";
import logosql from "../assets/sql.png";
import logoJava from "../assets/java.png";
import logoReact from "../assets/react.png";
import logoAngular from "../assets/Angular.png";
import threejs from "../assets/3d.png";
import flask from "../assets/Flask.png";
import logoNode from "../assets/node-js.png";
import logoNest from "../assets/nestjs.svg";
import logoExpress from "../assets/expressLogo.svg";
import logoMysql from "../assets/mysql.png";
import logoGit from "../assets/github.png";
import logoDocker from "../assets/docker.png";
import Footer from "../components/Footer/Footer";

export default function Competences() {
  const language = [
    { id: 1, name: "HTML", level: 95, img: html },
    { id: 2, name: "CSS", level: 95, img: css },
    { id: 3, name: "JavaScript & TypeScript", level: 94, img: Logojs },
    { id: 4, name: "Python", level: 75, img: logopy },
    { id: 5, name: "SQL", level: 80, img: logosql },
    { id: 6, name: "JAVA", level: 50, img: logoJava },
  ];

  const front = [
    { id: 1, name: "React", level: 96, img: logoReact },
    { id: 2, name: "Angular", level: 85, img: logoAngular },
    { id: 3, name: "Three JS", level: 70, img: threejs },
  ];

  const back = [
    { id: 1, name: "Express", level: 90, img: logoExpress },
    { id: 2, name: "Node.js", level: 90, img: logoNode },
    { id: 3, name: "Nest.js", level: 85, img: logoNest },
    { id: 4, name: "Flask", level: 55, img: flask },
  ];

  const devOps = [
    { id: 1, name: "Git et Git Hub", level: 91, img: logoGit },
    { id: 2, name: "Docker", level: 60, img: logoDocker },
  ];

  const bdd = [{ id: 1, name: "MySQL", level: 95, img: logoMysql }];

  return (
    <div className="competence">
      <Header />
      <BoxCompetences title="Langages" skills={language} />
      <BoxCompetences title="Front-End" skills={front} />
      <BoxCompetences title="Back-End" skills={back} />
      <BoxCompetences title="Base de Données" skills={bdd} />
      <BoxCompetences title="DevOps" skills={devOps} />
      <Footer />
    </div>
  );
}
