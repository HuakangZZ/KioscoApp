import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/dibujo.svg'
import { CiUser } from 'react-icons/ci';
import { Link, Outlet } from 'react-router-dom';

function mostrarHeader(userLogin) {
    if (userLogin) {
        return <div>
            <Navbar expand="lg" className="navbar-contenedor">
            <Container style={{margin: 0}}>
                <Link to={"/home"}><div className='logo'></div></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="separacion">
                    <Link to={"/precios"} className='link-nabvar nav-link'>Precios</Link>
                    <Link to={"/calculadora"} className='link-nabvar nav-link'>Calculadora</Link>
                    <Link to={"/agregar-producto"} className='link-nabvar nav-link'>Agregar Producto</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <Link className='enlace-user'>
                <CiUser size="70px"/>
            </Link>
            </Navbar>
            <Outlet/>
        </div>
    }
}

function Header({userLogin}) {
    return (
        <div>
            {mostrarHeader(userLogin)}
        </div>
        
    )
}
  
export default Header;