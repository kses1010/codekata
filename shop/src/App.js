import './App.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import bg from './assets/img.png';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [shoes, setShoes] = useState(data);

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#home'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage: `url(${bg})` }}></div>

      <Container>
        <Row>
          {shoes.map((shoe) => {
            return (
              <Card shoe={shoe} key={shoe.id}></Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

function Card({ shoe }) {
  return (
    <Col>
      <img src={`${shoe.image}`} alt='' width='80%' />
      <h4>{shoe.title}</h4>
      <p>{shoe.content}</p>
      <p>{shoe.price}</p>
    </Col>
  );
}

export default App;
