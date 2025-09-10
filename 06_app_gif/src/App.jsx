import { useState } from 'react'
import './App.css'
// también se puede ver como
// const App=() => {}
function App() {
  const [categorias , setCategorias] = useState(['Trump', "pepe"])
 

  return (
    <>
      {/* titulo */}
      <h1>BUSCADOR DE GIFS</h1>
      {/* input */}

      
      {/* listado de gifs */}
              {/* elemento listado gifs */}
              <ol>
                {
                  categorias.map( categoria => (
                     <li key={categoria}>{categoria}</li>    
                  ))
                }
              </ol> 
    
    </>
  )
}

export default App
