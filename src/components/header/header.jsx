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
                <Nav className="me-auto">
                    <Link to={"/precios"} className='link-nabvar nav-link'>Precios</Link>
                    <Link to={"/calculadora"} className='link-nabvar nav-link'>Calculadora</Link>
                    <NavDropdown title="Acciones" id="basic-nav-dropdown" className='link-nabvar'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
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