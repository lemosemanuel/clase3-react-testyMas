import React, {useState} from 'react';
import PropTypes from 'prop-types';



const CounterApp=({
    value
})=>{
    // vamos con los hooks (state,setState)
    const [counter,setCounter]=useState(value);
    const sumar=()=>{
        // esto es lo mismo que lo de abajo
        // setCounter(counter+1);
        setCounter((c)=>c+1);
    }
    // creo el de restar
    const restar=()=>{
        setCounter((c)=>c-1);
    }
    // creo el reset
    const reset=()=>{
        // puedo resetearlo asi
        setCounter(value);
        // setCounter((c)=>c=value);
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={sumar}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={restar}>-1</button>

        </>
    );
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired
}

export default CounterApp;