import { useDispatch, useSelector } from 'react-redux';


function App(state) {
  const weight = useSelector((state) => state);
  const height = useSelector((state)=> state);
  const dispatch = useDispatch();

  return (
    <div className="App">
    <p>내 몸무게는 {weight} 이다.</p>
    <p> 내 키는 {height} 이다. </p>

      <button
        onClick={() => {
          dispatch({ type: 'plus' });
        }}
      >
        몸무게 더하기
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'minus' });
        }}
      >
        몸무게 빼기
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'plusH' });
        }}
      >
        키 더하기
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'minusH' });
        }}
      >
        키 빼기
      </button>
    </div>
  );
}

export default App;
