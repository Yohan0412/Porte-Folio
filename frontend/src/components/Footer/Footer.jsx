import "./footer.css";
import Lottie from "lottie-react";
import github from "../../assets/GitHub.json";
import linkedin from "../../assets/Linkedin.json";

function Footer() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CVAlternance2025.pdf"; // Chemin vers le fichier PDF dans le dossier public
    link.download = "CV de Yohan Rosano.pdf"; // Nom du fichier lorsqu'il est téléchargé
    link.click(); // Simule un clic pour télécharger
  };
  return (
    <footer className="footer-comp">
      <div className="footer-div">
        <a href="https://github.com/Yohan0412" target="_blank" rel="noreferrer">
          <Lottie style={{ width: 100, height: 100 }} animationData={github} />
        </a>
        <button type="button" onClick={handleDownload} className="btn-dwl">
          Télécharger mon CV
        </button>
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
