import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export function useFetchGifs(category) {

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(function(), [lista de depedencias])
    // Si lista de dependencias es []. El código que se encuentra dentro del hook solo se ejecutará unicamente en la primer renderización del componente
    // Si alguna variable que se encuentre dentro de la lista de dependencias [v1,v2] sufre algún cambio, inmediatamente el código se ejecutará
    useEffect( () => {
        getImages();
    }, []);

    async function getImages() {
        const resultImages = await getGifs(category);
        setimages(resultImages);
        setIsLoading(false);
    }

    return {
        images: images,
        isLoading: isLoading
    }
}
