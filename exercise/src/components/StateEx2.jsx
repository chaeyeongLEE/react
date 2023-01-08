import React from 'react'
import { useState } from 'react'

export default function App () {
  //  const [content, setContent] = useState('남자 코트 추천');
    let[content, setContent] = useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
    let[good, setGood]= useState(0);
  return (
    <div className='App'>
       
         <button onClick={()=>{ setContent(['여자코트추천','강남밥맛집', '파이썬독학'])}}> 바뀌어라버튼 </button>
        <h4> {content[0]} <span onClick={()=>{ setGood(good+1) }}>👍</span>{good}
        </h4>
        <p>2월1일 구매</p>
        <hr />
        <h4>{content[1]} 
        </h4>
        <p>2월5일 구매</p>
        <hr />
        <h4>{content[2]}</h4>
        <p>2월7일 구매</p>
      
    </div>
  )
  }
