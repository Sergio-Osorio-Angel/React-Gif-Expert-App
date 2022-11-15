import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { GifExpertApp } from "../src/GifExpertApp";

// jest.mock("react");

describe('GifExpertApp', () => {

    test('Debe cargar las categorias iniciales', () => {
        // // Estado inicial
        // const initialCategories = ['Demon Slayer']
        // const setCategories = jest.fn();
        // useState.mockReturnValue({
        //     categories: initialCategories,
        //     setCategories: setCategories
        // });

        render(<GifExpertApp></GifExpertApp>);
        screen.debug();
        // console.log(screen.getAllByRole('heading',{level: 3}).length);
        
        // const form = screen.getByTestId('form-intro');
        // const input = screen.getByRole('textbox');

        // fireEvent.input(input, {target:{value:'Goku'}});
        // fireEvent.submit(form);
    })

});