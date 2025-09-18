import { useState } from 'react'

export default function ContadorCustom() {
  const [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador(contador + 1)
  }

  const decrementar = () => {
    setContador(contador - 1)
  }
   const resetear = () => {
    setContador(0)
  } 

  return (
    <>
      <h1>Contador</h1>
      <hr />
      <button className="btn btn-primary" onClick={incrementar}>+1</button>
      <button className="btn btn-danger" onClick={resetear}>Reset</button>
      <button className="btn btn-info" onClick={decrementar}>-1</button>
      <h2>Valor: {contador}</h2>
      <hr />
    </>
  )
}
