import React, { useEffect } from 'react'
import './agregar-producto.css'
import proximamente from "../../assets/proximamente.png";

function AgregarProducto({cargarNavBar}) {
    
    useEffect(() =>{
        cargarNavBar(true)
    },[cargarNavBar]);

    return (
        <div className='contenedor-agregar-producto'>
            <div className="contenedor-inputs-post">
                <div className="contenedor-input-post">
                    <h2 className='titulo-input-post'>Nombre del producto</h2>
                    <input type="text" className='input-post' placeholder='Ej.Queso tybo' />
                </div>
                <div className="contenedor-input-post">
                    <h2 className='titulo-input-post'>Cantidad de productos disponibles</h2>
                    <input type="text" className='input-post' placeholder='Ej.10' />
                </div>
                <div className="contenedor-input-post">
                    <h2 className='titulo-input-post'>Precio del producto</h2>
                    <input type="text" className='input-post' placeholder='Ej.8000' />
                </div>
                <div className="contenedor-input-post">
                    <h2 className='titulo-input-post'>Categoria del producto</h2>
                    <input type="text" className='input-post' placeholder='Ej.Quesos' />
                </div>
                <div className="contenedor-input-post">
                    <h2 className='titulo-input-post'>Codigo de barras</h2>
                    <input type="text" className='input-post' placeholder='Ej.123456789' />
                </div>
            </div>

            <div className="contenedor-imagen-post">
                <div className='contenedor-seleccionar-imagen'>
                    <img src={proximamente} alt="Proximamente" />
                </div>
                <div className="contenedor-botones-imagen-post">
                    <button className="boton-imagen-post">SELECCIONAR IMAGEN</button>
                    <button className="boton-imagen-post">CANCELAR</button>
                </div>
            </div>
            
        </div>
    )
}

export default AgregarProducto