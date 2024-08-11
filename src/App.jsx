import { Route, Router, Routes,BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Precios from './components/precios/precios'
import Bienvenida from './components/bienvenida/bienvenida'
import Login from './components/auth/login/login'
import { useState } from 'react'
import Register from './components/auth/register/register'


function App() {

  const [userLogin, setUserLogin] = useState(false);
  const [valor, setValue] = useState(false);

  const loguearse = (datosDelLog) => {
    setUserLogin(datosDelLog);
  }

  const setValor = (value) =>{
    setValue(value)
  }


  return (
    <div>
      <BrowserRouter>
        <Header userLogin={userLogin}/>
        <Routes>
          <Route path="/" element={<Login loguearse={loguearse} setValor={setValor}/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Bienvenida cargarNavBar={loguearse} valor={valor}/>}/>
          <Route path="/precios" element={<Precios cargarNavBar={loguearse}/>}/>

        </Routes>
      </BrowserRouter>
      

    </div>
  )
}

export default App
