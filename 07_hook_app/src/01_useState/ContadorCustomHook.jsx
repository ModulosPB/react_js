import { useContador } from "../hooks/useContador"

export default function ContadorCustomHook() {
  const { contador, incrementar, decrementar, resetear } = useContador()

  return (
    <>
      <h1>Contador</h1>
      <hr />
      {/* onClick={resetear} cuando no se envía argumento,
      //  por defecto envía el evento (event)=> resetear(event) */}
      {/* por eso al  poner paso se usa la función flecha */}
      {/* <button className="btn btn-primary" onClick={incrementar}>+1</button> */}
      {/* con paso 2*/}
      <button className="btn btn-primary" onClick={() => incrementar(2)}>+</button>
      <button className="btn btn-danger" onClick={resetear}>Reset</button>
      <button className="btn btn-info" onClick={() => decrementar(2)}>-</button>
      <h2>Valor: {contador}</h2>
      <hr />
    </>
  )
}
