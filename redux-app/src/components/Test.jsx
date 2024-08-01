import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Test() {
    const weight = useSelector((state)=>state);
    // 어떤것을 받아올지를 적어야하기때문에 (state) // 난 state를 콜백으로 받을 것이다.(= return {state} ) => return과 중괄호 생략가능
    const dispatch = useDispatch();

    return (
    <>
        <h1> 당신의 몸무게는 {weight} 입니다 </h1>
        <button onClick={()=>{ dispatch ({ type:'증가' })}}> 살 찌기 </button>
        <button onClick={()=>{ dispatch ({ type:'감소' })}}> 살 빼기 </button>
    </>
  )
}
