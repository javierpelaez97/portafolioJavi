

export default function Contact(){
    return (
      <>
        <form className="container">
          <div>
            <h2>Contacto</h2>
          </div>
          <h4>Puedes rellenar el siguiente formulario o si lo prefieres:</h4>
          <div>
            <p>javierpelaezgimenez@gmail.com</p>
            <p>+34605426806</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Empresa</label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input type="email" className="form-control"></input>
          </div>
          <button className="btn btn-dark">Enviar</button>
        </form>
      </>
    );
}