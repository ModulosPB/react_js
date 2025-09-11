import { useState, useEffect } from "react"
import obtenerGifs from "../helpers/obtenerGifs"

export const  usePedirGifs = (categoria) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

        // si está vacío se ejecuta cuando se crea el componente
        // si tiene dependencias, se ejecuta cuando cambia alguna de ellas
        //ejemplificar con un counter el renderizado innecesario de un componente
        // y la necesidad de usar useEffect
        useEffect(() => {
        obtenerGifs(categoria)
            .then(gifs => {
                setImages(gifs)
                setIsLoading(false)
            })
        }, [])

    return { 
        images,
        isLoading
 }
}



