import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

export default function TestUseEffect() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('입력 하세요!');
    const inputValue = useRef();


    const onButtonClick = () => {
        console.log('버튼클릭');
        setCount(count+1);
    };

    const onInputChange = () => {
        console.log("key입력");
        setText(inputValue.current.value);
    };

    useEffect(()=> {
        console.log('🙂 렌더링 될 때마다 실행');
    });
   
    useEffect(()=> {
        console.log('mount될때만 실행');
    },[]);

    //마운트 될 때만

    useEffect(()=> {
        console.log(':) 버튼 클릭 시에만 실행');
    }, [count]);
    //카운트 값이 업뎃됐을 때만 실행(특정값에만 반응하고플때)

    useEffect(()=> {
        console.log('키 입력 시에만 실행' );
    }, [text]);
    //text값이 업뎃됐을 때만 실행(특정값에만 반응하고플때)


  return <div>
        <h1>{count}</h1>
        <button onClick={onButtonClick}> +1 버튼</button>
        <br />
        <h1>{text}</h1>
        <input ref={inputValue} onChange={onInputChange} />


    </div>;
  
}
