import React, { useEffect } from 'react'
import './agregar-producto.css'
import proximamente from "../../assets/proximamente.png";
import ProductoService from '../../services/ProductoService';

const productoACargar = {
    nombre:"",
    stock:"",
    precio:"",
    codigoBarras:"",
    categoria:"",
    //proveedor:{},
}

function AgregarProducto({cargarNavBar}) {
    
    useEffect(() =>{
        cargarNavBar(true)
    },[cargarNavBar]);

    return (
        <div className='contenedor-agregar-producto'>
            <div className="contenedor-inputs-post">
                <div className='scroll-inputs'>
                    <div className="contenedor-input-post">
                        <h2 className='titulo-input-post'>Nombre del producto</h2>
                        <input type="text" className='input-post' placeholder='Ej.Queso tybo' onChange={(e) =>{ productoACargar.nombre = e.target.value.toString()}}/>
                    </div>
                    <div className="contenedor-input-post">
                        <h2 className='titulo-input-post'>Cantidad de productos disponibles</h2>
                        <input type="text" className='input-post' placeholder='Ej.10' onChange={(e) => {productoACargar.stock = e.target.value.toString()}}/>
                    </div>
                    <div className="contenedor-input-post">
                        <h2 className='titulo-input-post'>Precio del producto</h2>
                        <input type="text" className='input-post' placeholder='Ej.8000' onChange={(e) =>{ productoACargar.precio = e.target.value.toString()}}/>
                    </div>
                    <div className="contenedor-input-post">
                        <h2 className='titulo-input-post'>Categoria del producto</h2>
                        <input type="text" className='input-post' placeholder='Ej.Quesos' onChange={(e) =>{ productoACargar.categoria = e.target.value.toString()}}/>
                    </div>
                    <div className="contenedor-input-post">
                        <h2 className='titulo-input-post'>Codigo de barras</h2>
                        <input type="text" className='input-post' placeholder='Ej.123456789' onChange={(e) =>{ productoACargar.codigoBarras = e.target.value.toString()}}/>
                    </div>
                    <div className="contenedor-input-post">
                        <h2 className='titulo-input-post'>Proveedor</h2>
                        <input type="text" className='input-post' placeholder='Ej.Silvia-Golosinas'/>
                    </div>
                </div>
                    
                <div className='contenedor-boton-registrar-producto'>
                    <button className='boton-registrar-producto' onClick={() => {ProductoService.postProducto(productoACargar);}}>Registrar</button>
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