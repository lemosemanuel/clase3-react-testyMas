import '@testing-library/jest-dom'
import getSaludo from "../../bases/02-template-string";




describe('prueba en 02',()=>{
    test('prueba en getSalidp retornar Hola Emanuel',()=>{
        const nombre="emanuel";
        const saludo= getSaludo(nombre);

        expect(saludo).toBe('hola '+ nombre)
    })
    test('get saludo por defould debe retornar Carlos',()=>{
        const saludo=getSaludo();
        expect(saludo).toBe('hola Carlos')
    })
})