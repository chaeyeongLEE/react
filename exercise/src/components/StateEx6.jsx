import React from 'react'
import { useState } from 'react'


export default function StateEx6() {
    const[names, setNames] = useState(["홍길동", "김민수"]);
    const[input, setInput] = useState('');
      

    const handleInputChange = (e) =>{
        setInput(e.target.value);
    };
    // input창에 기입했을 때 onChange로 변화값 생성. *onChange는 input 안의 값이 변경될 때에 발생
    // e(event)라는 파라미터를 추가한것. e.target.value으로 현재 입력된 값을 가져올 수 있다.
    const handleUpload = () =>{
        setNames((prevState)=>{
            return([input, ...prevState])
        });
    }
    //이름이 화면에 뜨도록했고, 콜백함수 형태로 작성

  return (
    <div>
       <input type="text" value={input} onChange={handleInputChange}/>
       <button onClick={handleUpload}>upload</button>
       {names.map((name, index)=>{return <p key={index}>{name}</p>;})}
    </div>
  )
}
