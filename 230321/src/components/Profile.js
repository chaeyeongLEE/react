import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import height from '../reducers/height'
import weight from '../reducers/weight'

export default function Profile() {
    //const Counter = ({weight, height});
    
    const weight = useSelector((state)=>state.weight);
    const height = useSelector((state)=>state.height);
     
    const dispatch = useDispatch();

  return (
    <div>
        <h1>체중과 신장 플러스 마이너스 하기</h1>
        <p>무게 : {weight}</p>
        <p>키 : {height} </p>
        
        <button
        onClick={() => {
          dispatch({ type: 'PLUS' });
        }}
      >
        몸무게 더하기
      </button>
      <button
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

       
        
    </div>
  )
}
