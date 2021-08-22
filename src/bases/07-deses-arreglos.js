



// desestructuracion de Arreglos

// const personajes= [
//     'goku','vegeta','trunks'
// ]

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);


// desestructuracion
// const [p1]= personajes;
// // console.log(p1);

// // pero si quiero el segundo elemento
// // tengo que indicar que ignore el primer elem
// const [,p2]= personajes;
// console.log(p2);


const retornaArreglo=()=>{
    return ['ASD',321];
}
// const [letras, numeros]=retornaArreglo();
// console.log(letras)


// tarea
// hacer que el primer valor del arreglo se llame nombre
// el segundo set nombre
// const useState=(valor)=>{
//     return [valor,()=>{console.log('hola mundo')}]
// }
// const devolucion=useState('ema');
// console.log(devolucion)
// pero puedo ir al segundo valor que es una funcion
// devolucion[1]();

// respuesta
// const [nombre, setNombre]=useState('ema');
// // console.log(nombre);
// setNombre();


export{
    retornaArreglo
}