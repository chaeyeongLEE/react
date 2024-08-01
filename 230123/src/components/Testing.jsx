import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Testing() {
    const height = useSelector((state)=> state);
    const dispatch = useDispatch()

    return (
    <>
        <p>내 키는 클까요 작아질까요?{height}이게 제 키에요</p>
        <p> 안녕</p>
        <button onClick={()=>{dispatch({type : '키크기'})}}>커지기</button>
        <button onClick={()=>{dispatch({type : '키작아지기'})}}>작아지기</button>
    </>
  )
}
