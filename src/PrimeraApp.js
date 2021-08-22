import React from "react";
// importo react

// importa prop-types para obligar a poner los props 
import PropTypes from 'prop-types';

// Primer componente 
// trabajar siempre con funciones

const PrimeraApp=({
    saludo,
    subtitulo
})=>{
    // const saludo= "hola mundo"
    // const saludo2 = {
    //     nombre:'emanuel',
    //     apellido:'lemos'}
    
    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre> { JSON.stringify(saludo2,null,3)} </pre> */}
            <p> {subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes={
    // defino que tipo de prop tiene que ser y que sea requerido
    saludo: PropTypes.string.isRequired,
    // subtitulo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps={
    subtitulo:"soy un subtitulo"
}

export default PrimeraApp;