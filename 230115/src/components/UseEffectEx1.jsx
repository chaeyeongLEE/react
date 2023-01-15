import React from 'react'
import { useState , useEffect} from 'react'

export default function UseEffectEx1() {
        const[count, setCount] = useState(1);
        const IncreaseCount =
         () => { setCount (count + 1) ;};

        const [name, setName] = useState("");
        const ChangeName = (e) => {
            setName(e.target.value);
        };

        // 마운트 될 때마다 실행됨
        useEffect (() => {
            console.log('🥰 랜더링되었습니다');
        });

        // 마운트 + 카운트 변화될 때마다 실행됨
        useEffect (() => {
            console.log('😇 카운트');
        }, [count]);

        // 마운트 + 네임 변화될 때마다 실행됨
        useEffect (() => {
            console.log('🥸 네임');
        }, [name]);

        // 마운트 맨 처음 딱 실행될 때만 딱 한번 랜더링
        useEffect (() => {
            console.log('🤗 맨 처음에만');
        }, []);

        
  return (
    <div>
        <button onClick={IncreaseCount}>update</button>
        <p>{count}</p>
        <input type="text" value={name} onChange={ChangeName} />
        <p>name:{name}</p>
    </div>
  )
}
