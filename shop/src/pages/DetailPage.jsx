import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function DetailPage({ shoes }) {

  const [alert, setAlert] = useState(true);
  const { id } = useParams();
  const shoe = shoes.find((item) => item.id === Number(id));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      // 기존 타이머는 제거
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='container'>
      {alert === true ?
        <div className='alert alert-warning'>
          2초 이내 구매시 할인
        </div>
        : null
      }
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
