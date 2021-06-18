import React, {Component} from 'react';



class PersonCard extends Component{
    constructor(props) { //atributo
        super(props);
        this.state = {
           inicio: this.props.edad
        }
    }

    incrementarEdad = () => {
        this.setState({inicio: this.state.inicio + 1})
        }

    render(){
        return(
            <div>
                <h1> {this.props.apellido} {this.props.nombre}</h1>
                <p> Edad: {this.state.inicio} </p>
                <p> Color de Cabello: {this.props.colorCabello} </p>
                <button onClick= {this.incrementarEdad}>Feliz Cumple!</button>
            </div>
        )
    }
}


export default PersonCard


