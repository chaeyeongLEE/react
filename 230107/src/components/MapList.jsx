import React from 'react'

export default function MapList(props) {
    const {item, price} = props;

  return (
    <div>
        <h2>품목명: {item}</h2>
        <p>가격: {price}</p>
        <br />
    </div>
  )
}
