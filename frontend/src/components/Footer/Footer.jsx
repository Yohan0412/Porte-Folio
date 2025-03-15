import "./footer.css";
import Lottie from "lottie-react";
import github from "../../assets/GitHub.json";
import linkedin from "../../assets/Linkedin.json";

function Footer() {
  return (
    <footer className="footer-comp">
      <div className="footer-div">
        <Lottie style={{ width: 100, height: 100 }} animationData={github} />
        <h1 className="nomPrenom">Yohan Rosano</h1>
        <Lottie style={{ width: 100, height: 100 }} animationData={linkedin} />
      </div>
    </footer>
  );
}

export default Footer;
