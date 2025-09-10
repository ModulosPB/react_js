// import React from 'react'

import { useState } from "react"
//primera forma, recibo set del usestate como prop
// export const Categoria  = ({ anadir }) => {
    // segunda forma recibo la función con otro nombre
export const Categoria  = ({ onNuevaCategoria}) => {
    const [nuevaCategoria, setNuevaCategoria] = useState("")

    function handleCambio(event){
        // console.log(event.target.value)
        setNuevaCategoria(event.target.value)
    }
    function handleSubmit (event) {
        event.preventDefault()
        if(nuevaCategoria.trim().length < 2) return;
        // ventaja, paso el valor y me olvido de su funcionamiento interno
        // y manejar una función que está en otro componente
        onNuevaCategoria(nuevaCategoria.trim())
        // anadir(cat => [nuevaCategoria, ...cat])
        setNuevaCategoria('')
        }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
      type="text" value={nuevaCategoria}
      onChange={event => handleCambio(event)}
      //podría ser así también
      // onChange={handleCambio}
      placeholder="Añadir Categoria"
      />  
      <button>Añadir Categoria</button>
    </form>
    </>
  )
}
