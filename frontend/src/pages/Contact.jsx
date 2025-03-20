import React from "react";
import "./Contact.css";
import Header from "../components/Header/Header";

export default function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="contact-page">
      
        <div className="box-contact-infos">  
        <h1 className="title-contact">Mes Coordonnées</h1>
          <p className="txt-contact">
            <strong>EMAIL :</strong> yohan.rosano@hotmail.fr
          </p>
          <br />
          <p className="txt-contact">
            <strong>Téléphone :</strong> 06.35.43.74.09
          </p>
          <br />
          <p className="txt-contact">
            {" "}
            <strong>Linkedin: </strong>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yohan-rosano/"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/yohan-rosano/
            </a>{" "}
          </p>
          <br />
        </div>
      </div>
      <h1 className="form-contact-title">Formulaire de Contact</h1>
    </div>
  );
}
