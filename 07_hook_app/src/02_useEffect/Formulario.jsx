import { useEffect, useState } from "react"
import Mensaje from "./Mensaje"

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: 'pepe',
    email: 'pepe@gmail.com'
  })
const {nombre, email} = formData
// sin nada, se ejecuta cada vez que se modifica el estado
// con llaves vacías [] solamente una vez cuando el componente se crea

useEffect(() => {
  console.log('componente')
},)
useEffect(() => {
  console.log('form')
}, [formData])
useEffect(() => {
  console.log('email')
}, [email])



// sin evento de cambio en los input no se puede escribir
//  ya que react no actúa sin él


const handleChange = (e) => {      
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

  return (
    <>
    <div>Formulario</div>
   <form>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input type="text"
         className="form-control" 
         id="nombre" 
         value={nombre}
         name="nombre"
         onChange={handleChange}
         />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" 
        className="form-control" 
        id="email" 
        name="email"
        onChange={handleChange}
        value={email}
        />
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
    <hr />
    {/* con este código el componente deja de existir, se destruye
    no sería lo mismo si ponemos en mensaje en hidden */}
    {nombre==='pepe' && <Mensaje/>}
    
    </>
  )
}
