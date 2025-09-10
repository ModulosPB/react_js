import { useState } from 'react'
import './App.css'
import { GifGrid } from './componentes/GifGrid'
import { Categoria } from './Componentes/Categoria'
// también se puede ver como
// const App=() => {}
function App() {
  const [categorias , setCategorias] = useState(['Trump'])
  // function handleAdd(){
  //   setCategorias(['Nuevo',...categorias ]) // forma 1
  //   // setCategorias(cat => [...cat, 'Nuevo']) // forma 2
  // } 
  function onAddCategorias(valor){
    //verificar duplicados
    if(categorias.includes(valor)) return;
    //agregar
    setCategorias(cat => [...cat, valor])
  } 


  return (
    <>
      {/* titulo */}
      <h1>BUSCADOR DE GIFS</h1>
      {/* input */}
      {/* le envío como prop la función de modificación del estado */}
      {/* <Categoria anadir={setCategorias}/> */}
       {/* también puedo hacerlo así: */}
       {/* recibo el valor del otro componente y lo agrego yo que manejo la lista */}
      <Categoria onNuevaCategoria={(valor) => onAddCategorias(valor)}/>

      {/* listado de gifs */}
              {/* elemento listado gifs */}
                {
                  categorias.map( categoria => (
                    <GifGrid
                     key={categoria}
                     categoria={categoria}
                    />
                  ))
                }
             
    
    </>
  )
}
export default App
