

describe('Pruebas dentro del archivo demo.test.js',()=>{
    test('debe ser iguales los string',()=>{
        // inicialitacion
        const mensaje='hola mundo';
        // estimulo
        const mensaje2='hola mundo';
        // observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    })

})
