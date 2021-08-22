




const persona={
    nombre: 'emanuel',
    apellido: 'lemos',
    edad:45,
    direcccion:{
        ciudad:'nueva york',
        cp:3213,
        lat: 12.3213,
        long: 21.23123
    }
}

console.table({persona});

console.log(persona)


// ojo con esto por que cambiamos las caracteristicas de
// persona tambien
// const persona2=persona;
// persona2.nombre='Peter';

// console.log(persona);
// console.log(persona2);

// para crear un clon combiene
const persona2 = { ...persona};
persona2.nombre='juanita';

console.log(persona)
console.log(persona2)