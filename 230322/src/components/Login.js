import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../reducer/User'

export default function Login() {
  
    const dispatch = useDispatch();

    return (
    <div>

<button onClick={()=>{
    dispatch((login({name:'이채영', age:28, email: 'yeong@gmail.com'})))
}}
>login</button>

<button onClick={()=>{
    dispatch(logout());
}}
>logout</button>
    </div>
  );
}
