import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';

function DetailPage({ shoes }) {

  const [alert, setAlert] = useState(true);
  const { id } = useParams();
  const [tap, setTap] = useState(0);

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

      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link onClick={() => {
            setTap(0)
          }} eventKey='link0'>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => {
            setTap(1)
          }} eventKey='link1'>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => {
            setTap(2)
          }} eventKey='link2'>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tap={tap}/>
    </div>
  );
}

function TabContent({ tap }) {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap];
}

export default DetailPage;
