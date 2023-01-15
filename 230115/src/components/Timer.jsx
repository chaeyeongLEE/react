import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

export default function () {
    const [showTimer, setShowTimer] = useState(false);

    const Timer = (props) => {
        useEffect( () => {
            const timer = setInterval(()=>{
                    console.log('타이머돌아가는중..');
                }, 1000);
            return () => {
                clearInterval(timer);
                console.log('타이머가 종료되었습니다');
            };
            },[]);

    }
    
  return (
    <div>
        {showTimer && <Timer />}    
        <button onClick={()=> setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  )
}
