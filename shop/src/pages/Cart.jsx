import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../redux/useSlice';
import { addCount } from '../redux/Store';

function Cart() {

  const user = useSelector((state) => state.user);
  const stock = useSelector((state) => state.stock);
  const disPatch = useDispatch();

  return (
    <div>
      <h4>{user.name} {user.age}의 장바구니</h4>
      <button onClick={() => {
        disPatch(increase(10));
      }}>버튼</button>
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
        </thead>
        <tbody>
        {stock.map((item) =>
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>
              <button onClick={() => {
                disPatch(addCount(item.id));
              }}>+
              </button>
            </td>
          </tr>,
        )}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
