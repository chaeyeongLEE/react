import React from 'react'


export default function PropsEx(props) {
    const {title, author, price, type} = props;

  return (
    <div>
      <h1>{title}</h1>
      저자 : {author}
      판매가 : {price}
      구분 : {type}
    </div>
  )
}
