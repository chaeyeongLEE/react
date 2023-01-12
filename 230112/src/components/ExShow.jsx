import React from 'react'
import { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function ExShow() {
    const [show, setShow] = useState(false);
    //초기값을 안보여주겠다는 false

  return <div>
    {show && <PracticeTimer />}
    <button onClick={()=>setShow(!show)}>{show? '숨기기':'보이기'}</button>
  </div>;
  
}
