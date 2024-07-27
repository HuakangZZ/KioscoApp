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

function Precios() {
    let productos = ProductoService.getAllProducts();

    const obtenerProductoPorCodigo = (e) =>{
        console.log(ProductoService.getProductoPorCodigo(e));
    }

    
    return (
        <div>
            <div className='contenedor-buscador'>
                <Form>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Buscar codigo"
                        className=" mr-sm-2  buscador"
                        />
                    </Col>
                    <button onClick={()=>obtenerProductoPorCodigo(1234567)}></button>
                </Form>
            </div>
            <div className='contenedor-tabla'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Ultima Modificación</th>
                        </tr>
                    </thead>
                                
                    <tbody>
                    {productos.map((producto)=>(
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.ultimaModificacion[2] + "/" + producto.ultimaModificacion[1] + "/" + producto.ultimaModificacion[0]}</td>
                        </tr>))}
                    </tbody>

                                
                </Table>
            </div>
            
        </div>
    )
}
  
export default Precios;