import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../bases/05-funciones'


describe('pruebas en 05-funciones',()=>{
    test('debe retornar un objeto',()=>{
        const userTest={
            uid:'asd',
            username: 'lemos_ema'
        }

        const user= getUser();

        expect(user).toEqual(userTest);
    })

    // pruebo con getUser activo
    test('pruebo con getUserActivo',()=>{
        const nombre ="juani";
        const userTest={
            uid:'asd',
            username: nombre
        }
        const user= getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
    })
})