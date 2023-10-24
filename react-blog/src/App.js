import './reset.css';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [post, setPost] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [inputValue, setInputValue] = useState('');


  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleChangeTitleClick = () => {
    const copy = [...post];
    copy[0] = '여자 코트 추천';
    setPost(copy);
  };

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div>
        <button onClick={() => {
          const copy = [...post];
          copy.sort();
          setPost(copy);
        }}>가나다순정렬
        </button>
      </div>
      <div>
        <button onClick={() => {

        }}>글수정
        </button>
      </div>
      {
        post.map((a, i) => {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                setModal(true);
                setTitle(i);
              }}>{post[i]} <span onClick={(e) => {
                e.stopPropagation();

                const copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
              }}>👍</span> {like[i]}
                <button onClick={() => {
                  const copy = [...post];
                  copy.splice(i, 1);
                  setPost(copy);
                }}>삭제
                </button>
              </h4>
              <p>2월 17일 발행</p>
            </div>
          );
        })
      }

      <input onChange={(e) => {
        setInputValue(e.target.value);
      }}></input>
      <button onClick={() => {
        setPost([inputValue, ...post]);
      }}>입력
      </button>
      {modal ? <Modal post={post} title={title} /> : null}
      <ModalClass hello={'하하하'}></ModalClass>
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.post[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

class ModalClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Son',
      age: 20,
    };
  }

  render() {
    return (
      <div>
        안녕 {this.state.name} {this.state.age} {this.props.hello}
        <button onClick={() => {
          this.setState({ age: this.state.age + 1 });
        }}>버튼
        </button>
      </div>
    );
  }
}

export default App;
