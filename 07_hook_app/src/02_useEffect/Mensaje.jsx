import { useEffect } from "react"

export default function Mensaje() {
    useEffect(() => {
        //ejemplificación de fuga de memoria
        // console.log('componente montado')
        //   window.addEventListener('mousemove',(event)=>{
        //     console.log('ratón movido')
        // })
        // abajo deestructuro coordenadas de event
        // para destruir evento necesitamos que la función tenga una referencia
      const raton= ({x,y})=>{
            console.log('ratón movido a', x, y)
        }
       window.addEventListener('mousemove',raton)
     return () => {
        //parte de limpieza
       window.removeEventListener('mousemove',raton)
        console.log('componente desmontado')
  }
  },[])

  return (
    <>
        <h1>Bienvenido Pepe !!!!!</h1>
    </>
  )
}
