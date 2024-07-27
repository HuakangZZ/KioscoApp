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

}

export default new ProductoService();