import { useEffect, useState } from 'react';
import './precios.css'
import ProductoService from '../../services/ProductoService';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdDelete, MdEdit } from "react-icons/md";
import { IoIosArrowDown } from 'react-icons/io';
import { FiRefreshCcw } from 'react-icons/fi';

function cambiarNombre(nombre){
    const select = document.getElementsByClassName('select');
    if(nombre != null && nombre != undefined){
        select[0].textContent = nombre
    }
}

function mostrarYEsconderMenu(e){
    if(!e?.target?.children[0]?.classList.contains('rotar-icono-arriba')){
        e?.target?.children[0]?.classList.remove('rotar-icono-abajo')
        e?.target?.children[0]?.classList.add('rotar-icono-arriba');
        opciones?.classList.add('mostrar-opciones')
        opciones?.classList.remove('esconder-opciones-animacion');
        opciones?.classList.remove('esconder-opciones')
    }
    else{
        opciones?.classList.remove('mostrar-opciones');
        opciones?.classList.add('esconder-opciones-animacion');
        setTimeout(() => {
            opciones?.classList.add('esconder-opciones');
        }, 400);
        e?.target?.children[0]?.classList.remove('rotar-icono-arriba');
        e?.target?.children[0]?.classList.add('rotar-icono-abajo')
    }
}


function ponerAnimacionIconoRefresh(){
    const icono = document.getElementById('refresh')

    if (icono != null && icono != undefined) {
        icono.classList.add('animacion-icono-refresh')
    }
}

function sacarAnimacionIconoRefresh(){
    const icono = document.getElementById('refresh')

    if (icono != null && icono != undefined && icono.classList.contains('animacion-icono-refresh')) {
        icono.classList.remove('animacion-icono-refresh')
    }
}


function Precios({cargarNavBar}) {
    //let productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7];
    let productos = ProductoService.getAllProducts();
    const opciones = document.getElementById('opciones');

    const obtenerProductoPorCodigo = (e) =>{
        productos = ProductoService.getProductoPorCondicion(e)
    }

    const editar = () =>{
        console.log('Edito')
    }

    const eliminar = () =>{
        console.log('Elimino')
    }

    useEffect(()=>{
        cargarNavBar(true);
    },[cargarNavBar])
    
    return (
        <div className='contenedor-precios'>
            <div className='contenedor-buscador'>
                <Form>
                    <Col className='centrar'>
                        <Form.Control
                        type="text"
                        placeholder="CODIGO DE BARRAS / NOMBRE / CATEGORIA"
                        className=" mr-sm-2  buscador"
                        onChange={(e) => {obtenerProductoPorCodigo(e.target.value.toString())}}
                        />
                    </Col>
                    <button className='buscar-precio'>BUSCAR</button>
                </Form>
            </div>
            <div className="contenedor-select">
                <div className='contenedor-botones-select-limpiar'>
                    {/*
                        <button className="select" onClick={(e) =>{mostrarYEsconderMenu(e)}}>
                            --Seleccione un filtro--
                            <IoIosArrowDown></IoIosArrowDown>
                        </button>
                        <button className='boton-refresh' onMouseEnter={() =>{ponerAnimacionIconoRefresh()}} onMouseLeave={() =>{sacarAnimacionIconoRefresh()}}
                                onClick={() =>{
                                    const select = document.getElementsByClassName('select');
                                    if(select != null && select != undefined){
                                        select[0].textContent = "--Seleccione un filtro--"
                                    }
                                }}>
                            <FiRefreshCcw id='refresh' className='svg-refresh'/>
                        </button>
                    */}
                </div>
                
                <ul id='opciones' className="menu esconder-opciones">
                    <li onClick={(e)=>{cambiarNombre(e.target.textContent);}}>Vinos</li>
                    <li onClick={(e)=>{cambiarNombre(e.target.textContent)}}>Fiambres</li>
                    <li onClick={(e)=>{cambiarNombre(e.target.textContent)}}>Gaseosas</li>
                    <li onClick={(e)=>{cambiarNombre(e.target.textContent)}}>Cervezas</li>
                    <li onClick={(e)=>{cambiarNombre(e.target.textContent)}}>Variado</li>
                </ul>
            </div>
            <div className='contenedor-tabla'>
                <Table>
                    <thead>
                        <tr>
                            <th className='head-tabla'>ID</th>
                            <th className='head-tabla'>Nombre</th>
                            <th className='head-tabla'>Precio</th>
                            <th className='head-tabla'>Ultima Modificación</th>
                            <th className='head-tabla'>Codigo De Barras</th>
                            <th className='head-tabla'>Acciones</th>
                        </tr>
                    </thead>
                                
                    <tbody>
                    {productos.map((producto)=>(
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>${producto.precio}</td>
                            <td>{producto.ultimaModificacion[2] + "/" + producto.ultimaModificacion[1] + "/" + producto.ultimaModificacion[0]}</td>
                            <td>{producto.codigoBarras}</td>
                            <td className='contenedor-acciones'>
                                <button className='accion-boton-edit' onClick={editar}><MdEdit></MdEdit></button>
                                <button className='accion-boton-delete' onClick={eliminar}><MdDelete></MdDelete></button>
                            </td>
                        </tr>))}
                    </tbody>

                                
                </Table>
            </div>
            
        </div>
    )
}
  
export default Precios;