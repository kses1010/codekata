import { useState } from 'react';
import { data } from '../data';
import bg from '../assets/img.png';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';

export default function HomePage() {
  const [shoes, setShoes] = useState(data);

  return (
    <>
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
    </>
  );
}
