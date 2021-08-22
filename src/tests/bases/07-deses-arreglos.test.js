import "@testing-library/jest-dom";
import { retornaArreglo } from "../../bases/07-deses-arreglos";


describe('Pruebas en 07-desc-arreglo',()=>{
    test('debe retornar un string y un numero',()=>{
        const [letras, numeros] = retornaArreglo()
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
    })
})