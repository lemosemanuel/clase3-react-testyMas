import '@testing-library/jest-dom'
import { getHeroeByIdAsync } from '../../bases/09-promesas';
import heroes from '../../data/heroes';


describe('pruebas con promesas',()=>{
    test('debe retornar un heroe',(done)=>{
        const id=1;
        getHeroeByIdAsync(id)
        .then(h=>{
            console.log(h)
            expect(h).toBe(heroes[0]);
            done();
        })
    })
    test('debe tener un error si no existe el heroe',(done)=>{
        const id=10;
        getHeroeByIdAsync(id)
        .catch(error=>{
            expect(error).toBe('no se encontro nadaa');
            done();
        })
    })
})