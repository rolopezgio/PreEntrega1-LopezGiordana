import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponents = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CoffeeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Destacados</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cafetería</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pastelería</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Combos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          < CartWidget  />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponents;