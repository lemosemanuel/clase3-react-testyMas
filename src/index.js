
import React from 'react';
import reactDom from 'react-dom';

// importo el componente de PrimeraApp
// import PrimeraApp from './PrimeraApp';
// importo el css para darle color
import './index.css'
import CounterApp from './counterApp';


// console.log('hola mundoooo');
// const saludo= <h1>hola mundoo</h1>
// tengo que llamar la referencia al react Dom
const divRoot= document.querySelector('#root');

// para renderizar uso ReactDom
// lo primero es lo que quiero manda "saludo"
// lo segundo es donde (recordar que hace referencia
//  al root de ./public/index.html <div id="root"></div>)

// </> que este dentro de estas llaves habla de que es un componente
reactDom.render(<CounterApp value={10} />,divRoot)

