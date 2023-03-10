import React, { useRef } from 'react'

export default function ChangeFocus() {
    const input1 = useRef();
    const input2 = useRef();

    const ChangeFocusOne = () => {
        input1.current.focus();
    }

    const ChangeFocusTwo = () => {
        input2.current.focus();
    }
    //기능요소 만들기(changeFocusOne과 Two), current는 DOM요소까지 접근
  return (
    <div>
        <input ref={input1} />
        <input ref={input2} />
        <br/>
        <button onClick={ChangeFocusOne}>1번</button>
        <button onClick={ChangeFocusTwo}>2번</button>
    </div>
  )
}
