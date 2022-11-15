import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs.js', () => {

    test('debe retornar el estado inicial', () => {
        const {result} = renderHook( ()=> useFetchGifs('Demon Slayer') );
        const {images,isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();       
    })

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {
        const {result} = renderHook( ()=> useFetchGifs('Demon Slayer') );
        
        // await waitFor(callback(), opciones{})
        // waitFor: Espera a que lo de adentro se cumpla
        // timeout: después de este tiempo arroja un error
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {timeout: 5000}
        );

        const {images,isLoading} = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();   
    })
})