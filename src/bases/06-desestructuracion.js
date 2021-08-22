




// Desestructuracion de objetos

const persona={
    nombre:'tony',
    edad:45,
    clave:'ironman'
};
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);


// mejor hacer lo siguiente
// con el : lo renombro para no confundirme
const{nombre:nombre2}=persona;
console.log(nombre2)

// peudo
const{nombre,edad,clave}=persona;
console.log(nombre);
console.log(edad);
console.log(clave);

// puedo crear una funcion que retorna persona

const retornaPersona=(usuario)=>{
    const{nombre,edad,clave}=usuario;

    console.log(nombre,edad,clave)
};

retornaPersona(persona);

// es mas usado la desestructuracion en el argumento
const retornaPersona2=({nombre,edad})=>{
    console.log(nombre, edad);
};

retornaPersona2(persona);


// desestructuracion anidada de objetos
const retornaPersona3=({clave,nombre,edad})=>({
    nombreClave:clave,
    anios:edad,
    latyLong:{
        lat:23.213,
        long:12.23
    }

});

const {nombreClave,anios,latyLong:{lat,long}}= retornaPersona3(persona);
console.log(nombreClave,anios,lat)