

// Arreglos

// no se recomienda asi
// const arreglo= new Array();

// hacer asi 
const arreglo = [];
// tampoco es recomendable el push
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);

// se recomienda el operador spread
let arreglo2= [...arreglo, 5];

// voy a crear un arreglo donde multiplico sus numeros
// por 3
const arreglo3= arreglo2.map(
    // colback funcion que se ejecuta dentro del metodo
    function(numero){
        return numero *2;
    }
);


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
