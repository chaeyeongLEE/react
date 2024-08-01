import React from 'react'
import { useRef } from 'react'

export default function FocusChange() {
    const input1 = useRef();
    const input2 = useRef();

    const FocusChangeOne = () => {
        input1.current.focus()
    }

    const FocusChangeTwo = () => {
        input2.current.focus()
    }
    
  return (
    <div>
        <input ref={input1} />
        <input ref={input2} />

        <button onClick={FocusChangeOne}>1번</button>
        <button onClick={FocusChangeTwo}>2번</button>
        
    </div>
  )
}
