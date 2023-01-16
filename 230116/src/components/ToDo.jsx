import React, { useRef } from 'react'
import { useState } from 'react';
import List from './List'

export default function ToDo() {

    const inputValue = useRef();
    

    const dataArr = [{
        day: "monday",
        text : "리액트 공부하기"
    },
    {
        day: "tuesday",
        text : "복습하기"
    },
    ]
    
    const PlusToDo = () => {
        console.log(inputValue);
        inputValue.current.value;
    }

  return (
    <div>
    <input ref={inputValue} placeholder='할일작성' > </input>

    { <button onClick={PlusToDo}> 추가하기 </button> }


    {dataArr.map((el, index)=>{
        return <List day={el.day} text={el.text} key={index} />
    })}
  <br />
    {dataArr.map((el, index)=>{
        return (
            <div key={index}>
                <h1>{el.day}</h1>
                <h3>{el.text}</h3>
            </div>
        )
    })}


    </div>
  )
}
