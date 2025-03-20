import "./Header.css";
import imgContact from "../../assets/contact.png";
import Nav from "../Nav";

function Header() {
  return (
    <header>
      <Nav />
      <div className="header">
        <h1 className="titleHeader">Rosano Yohan</h1>
        <a className="liens" href="/contact">
          <img alt="imageContact" className="imageContact" src={imgContact} />
        </a>
      </div>
    </header>
  );
}

export default Header;
