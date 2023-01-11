import React from 'react'
import { useState } from 'react'

export default function StateEx5() {
  const[text, setText] = useState('Hello world!');

  return (
    <div className='App'>
        <h1>{text}</h1>
    <button onClick={()=>setText("Goodbye World!")}> 클릭 </button>
    </div>
  )
  }