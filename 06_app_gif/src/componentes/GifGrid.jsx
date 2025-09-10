import {useState, useEffect } from "react"
import obtenerGifs from "../helpers/obtenerGifs"
import GifItem from "./GifItem"

export const GifGrid = ({ categoria }) => {
    const [images, setImages] = useState([])

    // si está vacío se ejecuta cuando se crea el componente
    // si tiene dependencias, se ejecuta cuando cambia alguna de ellas
    //ejemplificar con un counter el renderizado innecesario de un componente
    // y la necesidad de usar useEffect
useEffect(() => {
  obtenerGifs(categoria)
    .then(gifs => setImages(gifs))
}, [])

// console.log(obtenerGifs(categoria))
  return (
    <>
      <h3>{categoria}</h3>
        <div className="card-grid">
          {images.map(img => (
            <GifItem
             key={img.id} 
             title={img.title} 
             url={img.url}
            />
          ))}
        </div>
    </>
  )
}
