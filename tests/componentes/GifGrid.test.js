import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs'); // hacer mock completo del path

describe('GifGrid.jsx', () => {
    const category = 'Demons Slayer';

    test('debe de mostrar el loading al iniciar - Prueba en punto inicial', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}></GifGrid>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('debe de mostrar items cuando se cargan las imagenes a través del hook useFetchGifs', () => {
        const gifs = [{id:'aaa',title:'Demon Slayer', url:'https://holamund.jpg'},
                    {id:'bbb',title:'Samurai X', url:'https://holamund.jpg'},
                    {id:'ccc',title:'Dragon ball', url:'https://holamund.jpg'}]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category}></GifGrid>);
        expect(screen.getAllByRole('img').length).toBe(3);
    })

})