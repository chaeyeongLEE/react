import React from 'react'
import { useRef } from 'react'

export default function UseRefEx3() {
    const inputText = useRef();
    const divEl = useRef();

    const ChangeColor = () => {
    divEl.current.style.backgroundColor = inputText.current.value;
    }


  return (
    <div ref={divEl}>
    <input ref={inputText} />
    <button onClick={ChangeColor}>색 적용</button>
    </div>
  )
  }
