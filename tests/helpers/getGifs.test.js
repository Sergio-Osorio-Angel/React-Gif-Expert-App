import { getGifs } from "../../src/helpers/getGifs";

describe('Helper - getGifs.js', () => {
    const query = 'Demon Slayer';

    test('debe retornar un arreglo de imagenes', async() => {
        const gifs = await getGifs(query);
        
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    })
})