import React from 'react'

export default function FancyBorder(props) {
  return (
    <div style={{ border: `3px solid ${props.color}`}}>
        {props.children}
    </div>
    //div style에서 객체니까 border를 {}로 감쌌다.
  )
}
