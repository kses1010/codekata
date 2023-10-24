import { useParams } from 'react-router-dom';

function DetailPage({ shoes }) {
  const {id} = useParams();
  const shoe = shoes.find((item) => item.id === Number(id));

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={`${shoe.image}`} width='100%'  alt=''/>
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
