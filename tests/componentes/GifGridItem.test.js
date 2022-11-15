import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('GifGridItem.jsx', () => {
    const title = 'Demon Slayer';
    const url = 'https://imagenes/test.jpg';

    test('match con Snapshot', () => {
        const {container} = render(<GifGridItem title={title} url={url}></GifGridItem>)
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifGridItem title={title} url={url}></GifGridItem>);
        const img = screen.getByRole('img');
        expect(img.src).toBe(url);
        expect(img.alt).toBe(title);
    })

    test('debe de mostar el titulo en el componente', () => {
        render(<GifGridItem title={title} url={url}></GifGridItem>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})