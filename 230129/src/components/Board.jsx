import React from 'react'

export default function Board(props) {
  const {title, review} = props;
  return (
    <>
    <h4> 타이틀 : {title} </h4>
    <h4> 리뷰 : {review} </h4>
    </>
    
  )
}
