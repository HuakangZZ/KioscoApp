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

const producto1 = {
    id:1,
    nombre: "agua",
    stock: 2,
    precio:250,
    ultimaModificacion:[2024, 5, 8],
    codigoDeBarras: 1234567
}

const producto2 = {
    id:2,
    nombre: "pan",
    stock: 2,
    precio:250,
    ultimaModificacion:[2024,5,8],
    codigoDeBarras: 1234567
}
const producto3 = {
    id:3,
    nombre: "pan",
    stock: 2,
    precio:250,
    ultimaModificacion:[2024,5,8],
    codigoDeBarras: 1234567
}
const producto4 = {
    id:4,
    nombre: "pan",
    stock: 2,
    precio:250,
    ultimaModificacion:[2024,5,8],
    codigoDeBarras: 1234567
}
const producto5 = {
    id:5,
    nombre: "pan",
    stock: 2,
    precio:250,
    ultimaModificacion:[2024,5,8],
    codigoDeBarras: 1234567
}
const producto6 = {
    id:6,
    nombre: "pan",
    stock: 2,
    precio:250,
    ultimaModificacion:[2024,5,8],
    codigoDeBarras: 1234567
}
const producto7 = {
    id:7,
    nombre: "pan",
    stock: 2,
    precio:250,
    ultimaModificacion:[2024,5,8],
    codigoDeBarras: 1234567
}

function cambiarNombre(nombre){
    const selected = document.getElementsByClassName('selected');
    if(nombre != null && nombre != undefined){
        selected[0].textContent = nombre
    }
}

function mostrarYEsconderMenu(e){
    if(!e?.target?.children[1]?.classList.contains('rotar-icono-arriba')){
        e?.target?.children[1]?.classList.remove('rotar-icono-abajo')
        e?.target?.children[1]?.classList.add('rotar-icono-arriba');
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
        e?.target?.children[1]?.classList.remove('rotar-icono-arriba');
        e?.target?.children[1]?.classList.add('rotar-icono-abajo')
    }
}


function Precios({cargarNavBar}) {
    let productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7];
    const opciones = document.getElementById('opciones');

    const obtenerProductoPorCodigo = (e) =>{
        console.log(ProductoService.getProductoPorCodigo(e));
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
                        placeholder="INSERTE EL CODIGO DE BARRAS"
                        className=" mr-sm-2  buscador"
                        />
                    </Col>
                    <button className='buscar-precio' onClick={()=>obtenerProductoPorCodigo(1234567)}>BUSCAR</button>
                </Form>
            </div>
            <div className="contenedor-select">
                <div className="select" onClick={(e) =>{mostrarYEsconderMenu(e)}}>
                    <span className="selected">--Seleccione un filtro--</span>
                    <IoIosArrowDown></IoIosArrowDown>
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
                            <td>{producto.codigoDeBarras}</td>
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