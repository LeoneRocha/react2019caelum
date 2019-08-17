import React from 'react'
//import Navegacao from './Navegation' <NavBar />
import './cabecalho.css' 
class Cabecalho extends React.Component {
    render() {
        return (
            <header className="Cabecalho">
                <h1> Twitelum </h1>

               {this.props.children}
            </header>
        )
    }

}

export default Cabecalho;

