import React from 'react'
import './pantallaBuenLogueo.css'
import { Link } from 'react-router-dom'

function PantallaBuenLogueo() {

  const animacion = (elemento) =>{
    elemento.classList.remove("boton-seccion")
    elemento.classList.add("boton-seccion-click")
  }

  const soltar = (elemento) =>{
    elemento.classList.add("boton-seccion")
    elemento.classList.remove("boton-seccion-click")
  }

  return (
    <div className='contenedor-botones' onMouseMoveCapture={(e)=>{console.log('e', e)}}>
      <Link to={"/precios"} className='boton-seccion' id='boton1' onMouseDown={(e)=>{animacion(e.target)}} onMouseUpCapture={(e)=>{soltar(e.target)}}>Listado de Precios</Link>
      <Link to={"/agregar-producto"} className='boton-seccion' id='boton2' onMouseDown={(e)=>{animacion(e.target)}} onMouseUpCapture={(e)=>{soltar(e.target)}}>Agregar Producto</Link>
      <Link to={""} className='boton-seccion' id='boton3' onMouseDown={(e)=>{animacion(e.target)}} onMouseUpCapture={(e)=>{soltar(e.target)}}>Consultar Proveedor</Link>
      <Link to={"/calculadora"} className='boton-seccion' id='boton4' onMouseDown={(e)=>{animacion(e.target)}} onMouseUpCapture={(e)=>{soltar(e.target)}}>Calculadora</Link>
    </div>
  )
}

export default PantallaBuenLogueo