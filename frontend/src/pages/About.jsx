import React from "react";
import "./about.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav";

export default function About() {
  return (
    <div className="about">
      <Header />
      <Nav />
      <div className="corps">
        <h1 className="titleAbout">A propos de moi </h1>
        <div className="box-img-about">
          {/* <img className="photo-about" alt="PhotoDeMoi" src={photo} /> */}
        </div>
        <div className="box-text-about">
          <p className="text-about">
            Je m'appelle Yohan Rosano j'ai 28 ans et j'ai découvert la
            programmation informatique à l'âge de 14 ans , j'y ai découvert
            également une passion pour la programmation et j'ai décidé d'en
            faire mon métier.
          </p>
          <br />
          <br />
          <p className="text-about">
            En 2022, je me lance dans l'aventure et j'ai effecuté une formation
            niveau BAC+2 ou équivalent à la WILD CODE SCHOOL ou j'apprends le
            JavaScript avec React et Express js dans cette formation qui est
            intense et complète, et a couvert tous les aspects nécessaires au
            développement d'un site web ou d'une application avec React.
          </p>
          <br />
          <br />
          <p className="text-about">
            Cela m'a conforté dans mon choix de devenir développeur web et
            aujourd'hui je suis à la recherche d'une alternance pour valider ma
            formation d'un an encore à la Wild code Shcool qui pourra me
            permettre je l'espère de travailler et de m'épanouir dans ce
            domaine. En attendant je continue de me former dans différents
            langages et avec divers outils afin d'être le plus performant
            possible.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
