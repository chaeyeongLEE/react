import React from 'react'

export default function List(props) {
    const {day, text} = props;

  return (
    <div>
        <h1> 요일 : {day} </h1>
        <h3> 할일 : {text} </h3>
    </div>
  )
}
