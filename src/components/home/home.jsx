import Logo from "../../assets/LogoPrueba.png";
import cv from "../../assets/Javier Peláez CV Español.pdf";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="container text-center space">
        <div className="row">
          <div className="col">
            <h1>
              Bienvenidos al portafolio de <br />
              <span className="name">Javier Peláez</span>{" "}
            </h1>
            <h3>
              Me llamo <span className="name">Javier Peláez </span> y soy un
              desarrollador <span className="name">FullStack </span>Junior
              apasionado por el desarrollo web y la programación
            </h3>
            <hr></hr>
            <div className="links">
            
              <a href={cv} className="btn btn-dark" download="cv">
                Descargar CV
              </a>
              <button className="btn btn-dark">Contactar</button>
            </div>
          </div>
          <div className="col">
            <img src={Logo} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </>
  );
}
