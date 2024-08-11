import React, { useEffect, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'
import LoginService from '../../../services/Login'
import { Button } from 'react-bootstrap'


function Login({loguearse, setValor}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
            <Link to={"/home"}>
                <Button onClick={() => {iniciarSecion(username,password)}} variant='primary' className='color-boton'>Loguearse</Button>
            </Link>
            <Link to={"/register"}>
                <Button variant='primary' className='color-boton'>Registrarse</Button>
            </Link>
        </div>
    )
}

export default Login