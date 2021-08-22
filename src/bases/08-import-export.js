


// importar

import heroes from "../data/heroes";
// recordar export const herores del archivo

// console.log(owners)

// console.log(heroes)

// optimizar el codigo

// const getHeroById=(id)=>{
//     return heroes.find(
//         (valor)=>{
//             if (valor.id === id){
//                 return valor.name
//             }else{
//                 return false;
//             }

//         }
//     )
// }

const getHeroById=(id)=>{
    return heroes.find( (valor) => valor.id===id);
}
// serial igual
// const getHeroById=(id)=> heroes.find( (valor) => valor.id===id);

// console.log(getHeroById(3))

const getHeroesByOwner=(owner)=> heroes.filter( (valor) =>valor.owner===owner);
// console.log(getHeroesByOwner('DC'))

export {
    getHeroById,
    getHeroesByOwner,
}


