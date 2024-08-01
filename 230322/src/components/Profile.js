import React from 'react'
import { useSelector } from 'react-redux'
//useSelector 를 이용하면 만들어놓은 리듀서에 접근할 수 있다.

export default function Profile() {
    const user = useSelector(state=>state.user.value);   
//초기값으로 세팅 해놓는 것
  return (
    <div>
        <h1>Profile</h1>
        <p>name : {user.name}</p>
        <p>age : {user.age}</p>
        <p>email : {user.email}</p>
    </div>
  )
}
