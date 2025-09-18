import { useState } from "react"

export default function Contador() {
    //partir de contador con sus 3 valores y luego
    // desestructuro el useState
    const [state, setContador] = useState(
        {
            contador1: 10,
            contador2: 20,
            contador3: 30,
        }
    ) // valor inicial del contador
    const  {contador1, contador2, contador3}=state
  return (
   <>
    <h1>Contador</h1>
    <hr />
    {/* si tenemos un objeto en el useState hay que preservar los otros valores
    al modificar uno solo */}
    <button onClick={() => setContador(
        {...state,
         contador1: contador1 + 1
        })}>+1</button>
    <button onClick={() => setContador(
        {...state,
         contador1: contador1 - 1
        })}>-1</button>
    {/* <button onClick={() => setContador({contador1: contador1 + 1, contador2: contador2 , contador3: contador3 })}>+1</button>
    <button onClick={() => setContador({contador1: contador1 - 1, contador2: contador2 , contador3: contador3 })}>-1</button> */}
    <h2>Valor: {contador1}</h2>
    <h2>Valor: {contador2}</h2>
    <h2>Valor: {contador3}</h2>
    <hr />
   </>
  )
}
