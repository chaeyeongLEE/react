import React from 'react'
import { useState } from 'react'

export default function App () {
  //  const [content, setContent] = useState('남자 코트 추천');
    let[content, setContent] = useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
    let[good, setGood]= useState(0);

    //state 내용바꾸기
    function changeContent() {
      var newArray = [...content]
      newArray[0] = '여자코트추천';
      setContent( newArray );
    }
    // 1. 기존 state 카피본 만들기 2. 카피본에 수정 사항 반영 3. 변경함수()에 집어넣기 (꼭 외우기 !!!)
    
  return (
    <div className='App'>
       
        <button onClick={()=>{ setContent(['여자코트추천','강남밥맛집', '파이썬독학'])}}> 바뀌어라버튼 </button>
        <button onClick={setContent}>바뀌어라 버튼2</button> 

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
