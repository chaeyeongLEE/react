import React from 'react'
import { useState, useRef } from 'react'

export default function UseRefEx1() {
    const[count, setCount] = useState(0);
    const countRef = useRef(0);

    const increaseCount = () => {
        setCount(count+1);
    };

    const increaseCountRef = () => {
        countRef.current =  countRef.current +1;
    };

  return (
    <>
    <p>State:{count}</p>
    <p>Ref:{countRef.current}</p>
    <button onClick={increaseCount}>state올려</button>
    <button onClick={increaseCountRef}>Ref올려</button>
    </>
  )
}
