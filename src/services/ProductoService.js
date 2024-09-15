import axios from "axios";
import BASE_URL from "./BaseUrl";
import { useEffect, useState } from "react";

class ProductoService {


    getAllProducts(){
        const [productos,setProductos] = useState([])

        useEffect(() => {
            fetch("http://localhost:8096/api/productos")
            .then((response) => response.json())
            .then((data) => setProductos(data));
        },[]);

        return productos;
    }

    getProductoPorCodigo(codigo){
        const [producto, setProducto] = useState('');

        useEffect(() => {
            fetch(BASE_URL + "/productoCodigoBarras/" + codigo)
            .then((response) => response.json())
            .then((data) => setProducto(data))
        })

        return producto
    }

    getProductoPorCondicion(condicion){
        let productos = [];

        fetch(BASE_URL + "/productosPorCondicion/" + condicion)
        .then((response) => response.json())
        .then((data) => {productos = data})

        setTimeout(() => {
            return productos
        }, 70);
    }

    postProducto(producto){

        const request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(producto)
        }
        fetch(BASE_URL + "/productos", request)
        .then((resp) => resp.json())


        console.log("Esto me devuelve: ");
    }

}

export default new ProductoService();