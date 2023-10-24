import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const YellowButton = styled.button`
  background: ${props => props.bg};
  color: ${props => props.bg === 'blue' ? 'white' : 'black'};
  padding: 1rem;
`;

const Box = styled.div`
  background: grey;
  padding: 2rem;
`;

const NewButton = styled.button(YellowButton);

function DetailPage({ shoes }) {
  const { id } = useParams();
  const shoe = shoes.find((item) => item.id === Number(id));

  return (
    <div className='container'>
      <Box>
        <YellowButton bg='blue'>버튼</YellowButton>
        <YellowButton bg='orange'>버튼</YellowButton>
        <NewButton>버튼</NewButton>
      </Box>
      <div className='row'>
        <div className='col-md-6'>
          <img src={`${shoe.image}`} width='100%' alt='' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
