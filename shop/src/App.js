import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { createContext, lazy, Suspense, useDeferredValue, useEffect, useState, useTransition } from 'react';
import { data } from './data';
import axios from 'axios';


const DetailPage = lazy(() => import('./pages/DetailPage'));
const Cart = lazy(() => import('./pages/Cart'));

export const Context1 = createContext();

function App() {
  const [shoes, setShoes] = useState(data);
  const [product, setProduct] = useState([10, 11, 12]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', JSON.stringify([]));
    }

  }, []);

  const handleMoreLoad = () => {
    axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((response) => {
        const copy = [...shoes, ...response.data];
        setShoes(copy);
      });
  };

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>반가워요 Son</Nav>
        </Container>
      </Navbar>

      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path='/' element={<HomePage shoes={shoes} handleMoreLoad={handleMoreLoad} />} />
          <Route path='/event' element={<Event />}>
            <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
            <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
          </Route>
          <Route path='/detail/:id' element={
            <Context1.Provider value={{ product, shoes }}>
              <DetailPage shoes={shoes} />
            </Context1.Provider>
          }>
          </Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/about' element={<About />}>
            <Route path='member' element={<div>멤버임</div>} />
            <Route path='location' element={<div>지역</div>} />
          </Route>
          <Route path='*' element={<div>없는 페이지입니다.</div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

function About() {
  const [name, setName] = useState('');
  const a = new Array(10000).fill(0);
  const [isPending, startTransition] = useTransition();
  const state = useDeferredValue(name);

  return (
    <div>
      <h4>회사 정보임</h4>
      <input onChange={(e) => {
        startTransition(() => {
          setName(e.target.value);
        })
      }} />
      {
        isPending ? "로딩중기다리셈" :
          a.map(()=>{
            return <div>{state}</div>
          })
      }
      <Outlet />
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
