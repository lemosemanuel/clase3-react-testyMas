



// funcines
// NO hacer esto 
// function Saludar(nombre){
//     return `hola , ${nombre}`;
// }
// saludar=30;

// console.log(saludar());

// siempre almacenarlo como constante
const saludar= function(nombre){
    return `hola , ${nombre}`;

}
console.log(saludar);

// se puede usar funcion lambda

const saludar2= (nombre)=>{
    return `hola , ${nombre}`;

}

// se puede asi tambien
const saludar3=(nombre) => (`hola , ${nombre}`);

console.log(saludar2('ema'));


// tarea
// transformar a funcion de flecha
// retornar a un objeto implicito 
// probar
// function getUsuarioActivo(nombre){
//     return {
//         uid:'asd',
//         username: nombre
//     }
// }

// const usuarioActivo=getUsuarioActivo('emanuel');
// console.log(usuarioActivo);

// respuesta

const getUser = ()=>({
    uid:"asd",
    username:"lemos_ema"
})

const getUsuarioActivo=(nombre)=>({
    uid:'asd',
    username:nombre,
})
const usuarioActivo=(getUsuarioActivo('ema'));
console.log(usuarioActivo)


export {
    getUser,
    getUsuarioActivo,

}