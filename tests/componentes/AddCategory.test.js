import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('AddCategory.js', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={ ()=>{} }></AddCategory>);
        
        // Seleccionar el campo
        const input = screen.getByRole('textbox');

        // Llenar el campo
        fireEvent.input(input, {target: {value: 'Demon Slayer'}});

        // Evaluar el cambio
        expect(input.value).toBe('Demon Slayer');
    })

    test('debe de el onNewCategory si el input tiene un valor [simulación submit]', () => {
        const inputValue = 'Demon Slayer';
        const onNewCategory = jest.fn(); //función ficticia

        render(<AddCategory onNewCategory={ onNewCategory }></AddCategory>);

        const input = screen.getByRole('textbox');
        const form = screen.getByTestId('form-intro');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        // screen.debug()

        // Al momento de llamar onSubmit() ejecuta la función prop onNewCategory 
        expect(onNewCategory).toBeCalled();
        expect(onNewCategory).toBeCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

        // Al momento de hacer el onSubmit(), se limpia el campo
        expect(input.value).toBe('');
    })

    test('no debe de llamar el onNewCategory si el valor del input es vacio [simulación submit]', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }></AddCategory>);

        const input = screen.getByRole('textbox'); // For defecto es vacio ''
        const form = screen.getByTestId('form-intro');

        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toBeCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })

})