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


function Precios({cargarNavBar}) {
    let productos = [producto1,producto2,producto1,producto2,producto1,producto2,producto1,producto2,producto1,producto2,producto1,producto2];

    const obtenerProductoPorCodigo = (e) =>{
        console.log(ProductoService.getProductoPorCodigo(e));
    }

    cargarNavBar(true)
    
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
                    <button onClick={()=>obtenerProductoPorCodigo(1234567)}>BUSCAR</button>
                </Form>
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
                        </tr>
                    </thead>
                                
                    <tbody>
                    {productos.map((producto)=>(
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.ultimaModificacion[2] + "/" + producto.ultimaModificacion[1] + "/" + producto.ultimaModificacion[0]}</td>
                            <td>{producto.codigoDeBarras}</td>
                        </tr>))}
                    </tbody>

                                
                </Table>
            </div>
            
        </div>
    )
}
  
export default Precios;