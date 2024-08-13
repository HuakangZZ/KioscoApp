import React from 'react'
import './pantallaBuenLogueo.css'
import { Link } from 'react-router-dom'

function PantallaBuenLogueo() {
  return (
    <div className='contenedor-botones'>
      <Link to={""} className='boton-seccion'>Listado de Precios</Link>
      <Link to={""} className='boton-seccion'>Agregar Producto</Link>
      <Link to={""} className='boton-seccion'>Consultar Proveedor</Link>
      <Link to={""} className='boton-seccion'>Listado de Precios</Link>
    </div>
  )
}

export default PantallaBuenLogueo