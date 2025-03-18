import "./footer.css";
import Lottie from "lottie-react";
import github from "../../assets/GitHub.json";
import linkedin from "../../assets/Linkedin.json";

function Footer() {
  return (
    <footer className="footer-comp">
      <div className="footer-div">
        <a href="https://github.com/Yohan0412" target="_blank" rel="noreferrer">
          <Lottie style={{ width: 100, height: 100 }} animationData={github} />
          <h1 className="nomPrenom">Yohan Rosano</h1>
        </a>
        <a
          href="https://www.linkedin.com/in/yohan-rosano/"
          target="_blank"
          rel="noreferrer"
        >
          <Lottie
            style={{ width: 100, height: 100 }}
            animationData={linkedin}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
