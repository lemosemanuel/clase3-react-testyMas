import "@testing-library/jest-dom"  
import { getImagenPromesa1 } from "../../bases/11-async-await"



describe(' Pruebas con 11 aasync y await',()=>{
    test('debe retornar la url de la imagen',async()=>{
        const url= await getImagenPromesa1();
        console.log(url)
        expect(url.includes('https://')).toBe(true);

    })
})