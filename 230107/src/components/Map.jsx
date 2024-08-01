import React from 'react'
import MapList from './MapList'

export default function Map() {
    const dataArr =[
        {
            item: "PS5",
            price: "685,000원",
        },
        {
            item: "에어프라이어",
            price: "50,000원",
        },
        {
            item: "사세 치킨윙",
            price: "11,500원",
        },

    ]
  return (
    <div>
    {dataArr.map((el, index)=> {
        return <MapList item={el.item} price={el.price} key={index} />
    })}
    <hr />
    {dataArr.map((el, index)=>{
        return (
            <div key={index}>
            <h2>{el.item}</h2>
            <p>{el.price}</p>
            </div>
        )
    })}
    </div>

    
  )
}
