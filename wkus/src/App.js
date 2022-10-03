//import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Navbar, NavDropdown, Nav, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Web-AKUS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Главная</Nav.Link>
              <NavDropdown title="Запросы" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Дисциплинарная практика</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Условия отбывания</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Исполнительные листы</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Осуждение</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Как пользоваться</Nav.Link>
              <Nav.Link href="#link">Об авторе</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col md={4} sm={4}>
            <h3>ФИО осужденного</h3>
            <Nav
              bsStyle="pills"
              stacked
            >
            </Nav>
          </Col>
          <Col md={8} sm={8}>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
