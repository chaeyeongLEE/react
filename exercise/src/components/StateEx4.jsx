import React from 'react'
import { useState } from 'react'

export default function StateEx4() {
  const[num, setNum]=useState(0);
// function Increase() {num +1};
// function Decrease() {num -2};
const Increase = () => setNum(num +1);
const Decrease = () => setNum(num -2);

  return (
    <div className='App'>
    
    {/* <button onClick={()=>setNum({Increase})}> +1 </button>
    <button onClick={()=>setNum({Decrease})}> -2 </button> */}
    <button onClick={Increase}> +1 </button>
    <button onClick={Decrease}> -2 </button>
    <h1>{num}</h1>
    </div>
  )
  }