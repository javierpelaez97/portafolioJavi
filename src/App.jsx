import { Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Proyects from "./components/proyectos/proytects";
import Technologies from "./components/tecnologias/technologies";

function App() {
  return (
    <>
      <div className="bg-secondary bg-gradient">
        <Header></Header>
        <Home></Home>
        <Technologies></Technologies>
        <Proyects></Proyects>
        <Contact></Contact>
      </div>
      
    </>
  );
}

export default App;
