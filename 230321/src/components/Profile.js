import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import index from '../reducers/index';
import height from '../reducers/height';
import weight from '../reducers/weight';
import { plus, minus, plush, minush } from '../actions/index';

export default function Profile() {
  // const weight = useSelector((state)=>state.weight);
  // const height = useSelector((state)=>state.height);
  const { weight, height } = useSelector((state) => state);
  // const { a, b } = useSelector(state => ({ a: state.a, state.b }), [])
  console.log('무게와 신장:', weight, height);

  const dispatch = useDispatch();

  const handlePlus = () => dispatch(plus());
  const handleMinus = useCallback(() => dispatch(minus()));

  const handlePlusH = useCallback(() => dispatch(plush()));
  const handleMinusH = useCallback(() => dispatch(minush()));

  return (
    <div>
      <h1>체중과 신장 플러스 마이너스 하기</h1>
      <p>무게 : {weight}</p>
      <p>키 : {height} </p>

      {/* <button
        onClick={() => {
          dispatch({ type: 'PLUS' });
        }}
      >
        몸무게 더하기
      </button> */}
      <button onClick={handlePlus} value="+">
        몸무게더하기
      </button>
      <button onClick={handleMinus}>몸무게빼기</button>
      <hr />
      <button onClick={handlePlusH}>키더하기</button>
      <button onClick={handleMinusH}>키빼기</button>
      {/* <button
        onClick={() => {
          dispatch({ type: 'MINUS' });
        }}
      >
        몸무게 빼기
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'PLUSH' });
        }}
      >
        키 더하기
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'MINUSH' });
        }}
      >
        키 빼기
      </button>

       
         */}
    </div>
  );
}
