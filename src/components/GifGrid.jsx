import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from "prop-types";

export function GifGrid({category}) {
 

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<span>Cargando...</span>)
        }
        <div className="card-grid">
          {
            // images.map((img) => (<GifGridItem key={img.id} title={img.title} url={img.url}></GifGridItem>))
            images.map((img) => (<GifGridItem key={img.id} {...img}></GifGridItem>))
          }
        </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}