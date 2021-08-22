





const nombre= 'emanuel';
const apellido= 'lemos';

// con los backtick 
const nombreCompleto= `${nombre} ${apellido}`;

console.log(nombreCompleto);


function getSaludo(nombre="Carlos"){
    return 'hola ' +nombre;
}


console.log(` Este es un texto: ${getSaludo(nombre)}`)


export default getSaludo;