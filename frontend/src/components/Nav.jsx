import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { slide as Menu } from "react-burger-menu";
import "./Nav.css";

function Nav() {
  return (
    <div className="navigation">
      <Menu>
        <a href="/">Home</a>
      </Menu>
    </div>
  );
}

export default Nav;
