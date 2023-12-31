import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import "./NavBarComponents.css"; 

const NavBarComponents = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand as={Link} to='/'><img src='../image/logo.png' alt='logo' className='logo'/></Navbar.Brand><Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link}  to={"/category/Peugeot"} >Peugeot</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/category/Renault"}>Renault</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/category/Chevrolet"}>Chevrolet</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        < CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBarComponents;