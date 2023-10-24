import { Col } from 'react-bootstrap';

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

export default Card;
