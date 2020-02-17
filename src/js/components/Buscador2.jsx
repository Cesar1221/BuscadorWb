import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../../assets/scss/buscador2.scss'

class Buscador2 extends React.Component {

  constructor(props){
    super(props)
    this.url = this.props.url
  }

  render() {

    return (
      <div className="container" id="cont">

        <div className="row">

          <form className="form-group" action={this.url} method="GET">
            
            {/* Barra de Búsqueda */}
            <div className="busqueda">
              <input type="search" name="sb[req][]" className="form-control" id="barraBus" placeholder="BUSCAR EN CATÁLOGO: Palabra clave..."></input>
              <input type="hidden" />
            </div>
            

            {/* Lista de opciones */}
            <div className="lista">
              <select name="sb[cod][]" className="form-control input-lg">
                <option value="">Todos los campos</option>
                <option value="WTI">Palabras en titulo</option>
                <option value="WAU">Autor</option>
                <option value="WPU">Editor</option>
                <option value="WSU">Temas</option>
              </select>
            </div>

            {/* Boton */}
              <button className="form-control" id="boton">BUSCAR</button>

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

export default Buscador2;
