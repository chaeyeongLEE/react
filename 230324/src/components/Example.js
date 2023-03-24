import React from 'react'
import {useSelector} from 'react-redux';


export default function Example(props) {
    const name = useSelector((state)=> state.name);
  return 
    <h1>{name}</h1>;
  
};
