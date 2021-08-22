import { getHeroById } from "./08-import-export";

// promesas

// import heroes from "./data/heroes";

// cuando la promesa es exitosa se ejecuta el resolve
// cuando falla vamos a ejecutar reject
const promesas = new Promise(
    (resolve, reject)=> {
        setTimeout(()=>{
            resolve();
        },2000)
    }
);

// cuando se cumple se ejecuta el then
promesas.then(()=>{
    console.log('then de la promesa');
})


// tarea importar el como promesa el getHeroeByid
// en vez de volverlo a hacer puedo importarlo 
// const getHeroById= (id)=> heroes.filter( (valor)=> valor.id ===id);
//  lo importe arriba

// const promesa2= new Promise(
//     (resolve,reject)=>{
//         setTimeout( ()=>{
//             const p1= getHeroById(10);
//             resolve(p1);
//             // reject ( 'no se pudo encontrar el heroe ')
//         },3000)
//     }
// )
// promesa2.then( (p1) => {
//     console.log('heroe ', p1);
// }).catch(err => console.warn(err));


const getHeroeByIdAsync= (id)=>{
    const promesa2=new Promise(
        (resolve,reject)=>{
            setTimeout( ()=>{
                const p1=getHeroById(id)
                if (p1){
                    resolve(p1)
                }else{
                reject('no se encontro nada');}
            },1500)
        }
    );
    return promesa2;
}
// getHeroeByIdAsync(10)
//     .then( valor=> console.log('heroe es ', valor))
//     .catch(err => console.warn(err))

export{
    getHeroeByIdAsync
}