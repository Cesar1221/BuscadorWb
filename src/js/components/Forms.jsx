import React from 'react'
import Buscador1 from './Buscador1'
import Buscador2 from './Buscador2'


const ruta = 'https://bibliotecasibe.ecosur.mx/sibe/resultados'

class Forms extends React.Component {

    constructor(props){
        super(props)
        this.msg = <h5>No existe nigún enlace relacionado...</h5>
    }

    render(){

        return(
            <div>
                {this.props.form_inline == true && <Buscador1 url={ruta}/> || this.props.form_inline == false && <Buscador2 url={ruta}/> || this.msg}
            </div>
        )
    }
}

export default Forms
