import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { slide as Menu } from "react-burger-menu";
import "./Nav.css";

function Nav() {
  return (
    <div className="navigation">
      <Menu>
        <a href="/">Home</a>
        <a href="/about">A propos</a>
        <a href="competences">Mes Compétences</a>
        <a href="/contact">Contactez Moi</a>
      </Menu>
    </div>
  );
}

export default Nav;
