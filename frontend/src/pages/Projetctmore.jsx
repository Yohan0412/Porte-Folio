import React from "react";
import "./Projectsmore.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import img1 from "../assets/test.png";

export default function ProjectsMore() {
  return (
    <div className="projects-more">
      <Header />
      <div className="box-project-balisage">
        <div className="projet-box-more">
          <div className="projet-data">
            <h2 className="title-project">Nom Projet</h2>
            <h3 className="descriptions"> Description:</h3>
            <p className="projet-description">
              Dans un coin reculé de la forêt, un petit village se cache
              derrière les arbres imposants. Les habitants y mènent une vie
              simple, loin du tumulte des grandes villes. Chaque jour, ils se
              réveillent au chant des oiseaux et commencent leur journée en
              toute tranquillité. Les enfants jouent dans les rues pavées,
              tandis que les adultes s'occupent des cultures et des animaux.
              L'air est frais et pur, et la nature environnante est d'une beauté
              sans pareille. Leurs maisons en pierre sont éparpillées entre les
              collines, et les champs alentours sont d'un vert éclatant. Chaque
              saison amène son lot de changements : au printemps, les fleurs
              colorent les paysages ; en été, les récoltes abondent ; à
              l'automne, les arbres se parent de mille teintes dorées, et en
              hiver, la neige recouvre tout d'un manteau blanc. Les soirées sont
              souvent passées autour d'un feu, où les anciens racontent des
              histoires de jadis, transmettant les traditions et les légendes
              qui ont traversé les âges. C'est un endroit où le temps semble
              s'être arrêté, offrant un refuge aux âmes en quête de paix.
            </p>
            <h3 className="title-front">Technologies Front:</h3>
            <div className="techno-front">
              <p className="techno-front-here">React</p>
              <p className="techno-front-here">HTML</p>
              <p className="techno-front-here">CSS</p>
              <p className="techno-front-here">Threejs</p>
            </div>
            <h3 className="title-back">Technologies Back:</h3>
            <div className="techno-back">
              <p className="techno-back-here">Express js</p>
              <p className="techno-back-here">NodeJs</p>
            </div>
            <h3 className="title-back">Base de Données:</h3>
            <div className="techno-back">
              <p className="techno-back-here">MySql</p>
            </div>
            <button type="button" className="btn-git-projet">
              Liens GitHub
            </button>
          </div>
          <div className="projet-image-box">
            <img src={img1} alt="gfgggf" className="image-projet-all" />
            <img src={img1} alt="gfgggf" className="image-projet-all" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
