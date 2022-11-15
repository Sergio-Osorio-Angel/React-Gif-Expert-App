import React, { useState } from 'react';
import PropTypes from "prop-types";

export function AddCategory ({onNewCategory}) {

    const [inputValue, setinputValue] = useState('');
    

    function onInputChange (event) {
        setinputValue(event.target.value)
    }

    function onSubmit (event)  {
        event.preventDefault();
        if (inputValue.trim().length <= 1) {
            return ;
        }
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit} data-testid='form-intro'>
            {/* <input type="text" placeholder='Buscar Gifs' value={inputValue} onChange={(event)=> {onInputChange(event)}}/> */}
            <input type="text" placeholder='Buscar Gifs' value={inputValue} onChange={onInputChange}/>
        </form>
    )
}
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
  }