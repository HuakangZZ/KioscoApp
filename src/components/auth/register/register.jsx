import React from 'react'
import './register.css'

function Register() {
  return (
    <div className='contenido-registro'>
        <h2 className='titulo-registro'>BIENVENIDO AL REGISTRO</h2>
        <div className='contenedor-campos-registro'>
            <div>
                <h3 className="titulo-campo-registro">Nombre</h3>
                <input type="text" className="campo-registro" placeholder='Ej. Diego'/>
            </div>
            <div>
                <h3 className="titulo-campo-registro">DNI</h3>
                <input type="text" className="campo-registro" placeholder='Ej. Matallana'/>
            </div>
            <div>
                <h3 className="titulo-campo-registro">Apellido</h3>
                <input type="text" className="campo-registro" placeholder='Ej. Gelly y obes 1063'/>
            </div>
            <div>
                <h3 className="titulo-campo-registro">Email</h3>
                <input type="email" className="campo-registro" placeholder='Ej. 1122334455'/>
            </div>
            <div>
                <h3 className="titulo-campo-registro">Dirección y altura</h3>
                <input type="text" className="campo-registro" placeholder='Ej. 12345678'/>
            </div>
            <div>
                <h3 className="titulo-campo-registro">Contraseña</h3>
                <input type="password" className="campo-registro" placeholder='Ej. example@gmail.com'/>
            </div>
            <div>
                <h3 className="titulo-campo-registro">Teléfono</h3>
                <input type="number" className="campo-registro" placeholder='Ej. Pepito0012+'/>
            </div>
            <div>
                <h3 className="titulo-campo-registro">Confirmar contraseña</h3>
                <input type="password" className="campo-registro" placeholder='Ej. Pepito0012+'/>
            </div>

        </div>
    </div>
  )
}

export default Register