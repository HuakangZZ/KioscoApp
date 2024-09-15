import React, { useEffect, useState } from 'react'
import './agregar-producto.css'
import proximamente from "../../assets/proximamente.png";
import ProductoService from '../../services/ProductoService';
import BASE_URL from '../../services/BaseUrl';

const productoACargar = {
    nombre:"",
    stock:"",
    precio:"",
    codigoBarras:"",
    categoria:"",
    //proveedor:{},
}

function AgregarProducto({cargarNavBar}) {

    const [categorias, setCategorias] = useState([]);

    const showDataCategoria = async(e) => {
        if(e != '' && e != null && e != undefined){
            let response = await fetch(BASE_URL + "/categoriasRegistradasPorCondicion/" + e);
            let data = await response.json();
            setCategorias(data);
        }
        else{
            setCategorias([]);
        }
        console.log(categorias);
    }

    const showDataCategoriaFocus = async() =>{
        let response = await fetch(BASE_URL + "/categoriasRegistradas");
        let data = await response.json();
        setCategorias(data);
    }

    const botonSetearCategoria = () =>{
        const inputCategoria = document.getElementById('categori')
        console.log(inputCategoria)
    }
    
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
                        <input id='categori' type="text" className='input-post' placeholder='Ej.Quesos' onBlur={() => {setCategorias([])}} onFocus={() => {showDataCategoriaFocus()}} onChange={(e) =>{ showDataCategoria(e.target.value.toString(), productoACargar.categoria = e.target.value.toString())}}/>
                            {categorias.length > 0 && (
                                <ul style={{width:"100%",backgroundColor:"red", overflow:'auto'}}>
                                    {categorias.map(cate => (
                                        <li key={categorias.indexOf(cate)}>
                                            <button onClick={() => {botonSetearCategoria()}}>{cate}</button>
                                        </li>
                                    ))}
                                </ul>
                        )}
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