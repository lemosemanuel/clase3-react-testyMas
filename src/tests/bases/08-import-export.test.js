import '@testing-library/jest-dom'
import {getHeroById, getHeroesByOwner } from '../../bases/08-import-export';
import heroes from '../../data/heroes';


describe('Pruebas en la 08',()=>{
    test('debe retornar un heroe',()=>{
        const id=1;
        const heroe= getHeroById(id);

        const heroeData=heroes.find((h)=>h.id===id);
        console.log(heroeData)
        expect(heroe).toEqual(heroeData);
    })
    test('debe retornar un Undefine',()=>{
        const id=10;
        const heroe= getHeroById(id);

        const heroeData=heroes.find((h)=>h.id===id);
        console.log(heroeData)
        expect(heroe).toEqual(undefined);
    })
    test('debe retornar un arreglo de DC',()=>{
        const owner='DC';
        const heroe= getHeroesByOwner(owner);

        const heroeData=heroes.filter((h)=>h.owner===owner);
        console.log(heroeData)
        expect(heroe).toEqual(heroeData);
    })
    test('debe retornar un arreglo de 2 cuando busco Marvel',()=>{
        const owner='Marvel';
        const heroe= getHeroesByOwner(owner);
        expect(heroe.length).toEqual(2);
    })
})