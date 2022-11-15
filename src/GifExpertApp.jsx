import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export function GifExpertApp() {

    const key = 'YVUEBToya77CxWfY9LnQOQYfh6Rc6BME';
    const url = 'https://api.giphy.com/v1/gifs/random?api_key='+key;

    const [categories, setCategories] = useState(['Demon slayer']);

    function onAddCategory(newCategory) {
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([newCategory,...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            {/* <AddCategory onNewCategory={(value)=>{onAddCategory(value)}}></AddCategory> */}
            {/* Si un el paramentro del callback se le pasa a la función a llamar */}
            {/* Se puede directamente llamar la función y esta recibirá el mismo parametro */}
            <AddCategory onNewCategory={onAddCategory}></AddCategory>

            <ol>
                { categories.map(category => (
                    <GifGrid key={category} category={category}></GifGrid>
                )) }
            </ol>
        </>
    )
}