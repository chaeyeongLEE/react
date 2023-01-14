import React from 'react'
import { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function ExConditional2() {
    const[condition, setCondition] =useState("1번");
    //초기값 설정

    const onChange = () => {
         condition ===  "1번"  ? setCondition("2번") :setCondition("1번");
    };
    //바뀌는 onchange 설정

  return (
    <div>
        {condition === '1번' ? (
            <PracticeOne text = {condition} />
            ) :(
            <PracticeTwo text = {condition} />
        )}
        <button onClick= {onChange}> {condition} </button>
    </div>
  )
}
