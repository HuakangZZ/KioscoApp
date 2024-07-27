import { Route, Router, Routes,BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Precios from './components/precios/precios'
import Bienvenida from './components/bienvenida/bienvenida'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Bienvenida/>}/>
          <Route path="/precios" element={<Precios/>}/>
        </Routes>
      </BrowserRouter>
      

    </div>
  )
}

export default App
