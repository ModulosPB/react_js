import { useState } from "react"

export const useContador = (valorInicial = 0) => {
    const [contador, setContador] = useState(valorInicial)            
    const incrementar = (salto=1) => {         
        setContador(contador + salto)
    }
    const decrementar = (salto=1) => {  
      // if (contador === 0) return       
        setContador(contador - salto)
    }
    const resetear = () => {
       setContador(valorInicial)
   }

  return {
    contador,
    incrementar,
    decrementar,
    resetear
  }
}
