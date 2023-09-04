import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';

const NavBarComponents = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand> <Link to="/">BINS</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item> <Link to="/">Home</Link> </Nav.Item>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to={"/category/hombre"}>Hombre</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={"/category/mujer"}>Mujer</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>          
        </Navbar.Collapse>
        < CartWidget  />
      </Container>      
    </Navbar>
  );
}

export default NavBarComponents;