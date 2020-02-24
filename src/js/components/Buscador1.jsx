import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../../assets/scss/buscador1.scss'

class Buscador1 extends React.Component {

  constructor(props){
    super(props)
    this.url = this.props.url 
  }

  render() {

   
    return (
      <div className="container">

        <div className="row">

          <form className="form-group form-row col" action={this.url} method="GET">
            
            {/* Barra de Búsqueda */}
            <div className="form-group col-12 col-sm-6">
              <input type="search" name="sb[req][]" className="form-control" id="barraBus" placeholder="BUSCAR EN CATÁLOGO: Palabra clave..."></input>
              <input type="hidden" />
            </div>
            

            {/* Lista de opciones */}
            <div className="form-group col-12 col-sm-3">
              <select name="sb[cod][]" className="form-control input-lg">
                <option value="">Todos los campos</option>
                <option value="WTI">Palabras en titulo</option>
                <option value="WAU">Autor</option>
                <option value="WPU">Editor</option>
                <option value="WSU">Temas</option>
              </select>
            </div>

            {/* Boton */}
              <button className="btn btn-primary col-12 col-sm-2" id="boton">BUSCAR</button>

          </form>
        </div>

        {/* Links */}
        <div className="form-group" id="enlace">
          <a href="#">Búsqueda avanzada</a>
          <span> | </span>
          <a href="#">Búsqueda de autoridad</a>
        </div>
      </div>
    );
  }
}

export default Buscador1;
