import bg from '../assets/img.png';
import { Container, Row } from 'react-bootstrap';
import Card from '../components/Card';

function HomePage({ shoes, handleMoreLoad }) {
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
      <button onClick={handleMoreLoad}>버튼</button>
    </>
  );
}

export default HomePage;
