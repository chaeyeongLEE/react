import React, { useRef } from 'react'

export default function ColorInput() {
  const userInput = useRef();
  //인풋태그에서 값을 받는 역할
  const divEl = useRef();
  //전체요소에 색을 변경하는 역할
  const adjustCSS = () => {
    divEl.current.style.backgroundColor = userInput.current.value;
  }
  //색적용이 클릭이 됐을 때 input 요소에서 받은값을 div에 전달
  // 인풋태그에서 받은 값


  return (
    <div ref={divEl}>
     <input ref={userInput} />
     <br />

    <button onClick={adjustCSS}>색적용</button>


    </div>
  )
}
