import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';

export default function FruitList() {
    const setFruitList = useSelector((state)=> state.FruitList);
    const dispatch = useDispatch();
    console.log(setFruitList);
    dispatch(setFruitList("딸기"));
  return (
    <div>
        <p>과일: {setFruitList}</p>
        <p>무슨과일?{action.type === SET_FRUIT_LIST}</p>
    </div>
  )
}
