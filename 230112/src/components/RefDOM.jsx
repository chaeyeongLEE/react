import React from 'react'
import { useRef } from 'react'

export default function RefDOM() {
  const orangeEl = useRef();
  const skyblueEl = useRef();
  const inputEl = useRef();

  const adjustCSS = () => {
    orangeEl.current.style.backgroundColor = "orange";
    skyblueEl.current.style.backgroundColor = "skyblue";
  }

  const clearInput = () => {
    inputEl.current.value = "";
  };
  //input에 어떤값이 들어가있건 빈문자열로 초기화해주는 역할

  //위에서 기능부분 다 구현 완료
    return (
    <div>
        <h1 ref={orangeEl}>orange</h1>
        <h1 ref={skyblueEl}>skyblue</h1>
        <input ref={inputEl} />
        <br />
        <br />
        <button onClick={adjustCSS}>CSS 적용하기</button>
        <button onClick={clearInput}>Input 초기화</button>
        
    </div>

    )
}
