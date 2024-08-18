import React, { useEffect, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'
import LoginService from '../../../services/Login'
import { Button } from 'react-bootstrap'

function Modal({valorModal, mostrarModal}){
    if (valorModal) {
        return <div className="contenedorDialog">
                <div className='alerta' id="alert-dialog">
                    <p>¡ALGO SALIO MAL!</p>
                    <Button variant='primary' className='color-boton' onClick={() =>{mostrarModal(false)}}>Reintentar</Button>
                </div>
            </div>
            
            
    }
}

function BotonCorrecto({boolean, iniciarSecion, username, password, mostrarModal}) {
    if (boolean) {
        return <Link to={"/home"} id='boton-login'>
                    <Button onClick={() => {iniciarSecion(username,password)}} variant='primary' className='color-boton'>Loguearse</Button>
                </Link>
    }
    else{
        return <Link id='boton-login'>
                <Button onClick={() => {mostrarModal(true)}} variant='primary' className='color-boton'>Loguearse</Button>
        </Link>
    }
}

function Login({loguearse, setValor}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mostrar, setMostrar] = useState(false);

    const mostrarModal = (cargarValor) =>{
        setMostrar(cargarValor)
    }

    const ponerUsername = (valor) =>{
        setUsername(valor)
    }
    const ponerPassword = (valor) =>{
        setPassword(valor)
    }

    const iniciarSecion = (username, password) => {
        const token = LoginService.login(username, password)
        console.log(token)
    }

    useEffect(() => {
        loguearse(false);
      },[loguearse]);
    
    
    return (
        <div className='contenedor-login'>
            <div>
                <CiUser size="100px" className='color'/>
            </div>

            <div className='contenedor-campos-login'>
                <input type="text" placeholder='Nombre de usuario' className='input' onChange={(e) => ponerUsername(e.target.value)}/>
                <input type="text" placeholder='Contraseña' className='input' onChange={(e) => ponerPassword(e.target.value)}/>
            </div>
            {<BotonCorrecto boolean={false} iniciarSecion={iniciarSecion} username={username} password={password} mostrarModal={mostrarModal}/>}
            <Link to={"/register"}>
                <Button variant='primary' className='color-boton'>Registrarse</Button>
            </Link>
            <Modal valorModal={mostrar} mostrarModal={mostrarModal}/>
            
        </div>
    )
}

export default Login