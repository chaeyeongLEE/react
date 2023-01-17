import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {

    const[dataArr, setDataArr] = useState([]);

    async function fetchData(){
        const resFetch = await axios.get('http://localhost:4000');

        if(resFetch.status !== 200) return alert('통신 에러');
        //if문에서 return으로 예외처리해주는게 가독성에서 좋음
        
        const data = resFetch.data;

        setDataArr(data);
        console.log(data);
    }

    useEffect(()=> {
        fetchData();
    },[]);
      //리액트에서는 함수를 만들어서 전달하는 것을 권고함.

  return (
    <div>
        {dataArr.map((el, index)=> {
            return (
                <ProfileComponent 
                key={index}
                name={el.name}
                age={el.age}
                nickname={el.nickname}
                />
            );
        })}

    </div>
  )};