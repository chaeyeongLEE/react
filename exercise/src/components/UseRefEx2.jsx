import React,{useEffect, useRef} from 'react'

export default function UseRefEx2() {
    const inputRef = useRef();

    useEffect(()=>{
    //console.log(inputRef);
    inputRef.current.focus();
    },[]);
    //useEffect는 맨처음에 화면이 로딩될 때 실행되는 로직
    //focus는 인풋창에 ㅣ 이거를 띄워주는 것(포커스를 인풋창으러 맞춰줌)
    
    const login = () => {
        alert(`환영합니다${inputRef.current.value}!`);
    // input창에 기입한 값이 alert로 출력됨
        inputRef.current.focus();
    }
return (
    <>
    <input ref={inputRef} type="text" placeholder='username' />
    <button onClick={login}>로그인</button>
    </>
  )
}

