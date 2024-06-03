

import './App.css'
import Contact from './components/contact/contact'
import Header from './components/header/header'
import Home from './components/home/home'
import Proyects from './components/proyectos/proytects'
import Technologies from './components/tecnologias/technologies'
import Logo from "../src/assets/LogoPrueba.png"

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='container text-center'>
      <div className='row'>
        <div className='col'>
          <h1>Bienvenidos al portafolio de <br/><span className='name'>Javier Pelaez</span> </h1>
          <h3>Me llamo <span className='name'>Javier Peláez </span>  y soy un desarrollador <span className='name'>FullStack </span>Junior apasionado por el desarrollo web y la programación</h3>
        </div>
        <div className='col'>
          <img src={Logo} className='logo'></img>
        </div>

      </div>
       
      </div>
      <Home></Home>
      <Proyects></Proyects>
      <Technologies></Technologies>
      <Contact></Contact>
    </>
  )
}

export default App
