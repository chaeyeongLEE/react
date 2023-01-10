import React from 'react'

import books from '../books.png'

export default function PropsExChild() {
    const book = {title:"나의 하루는 4시 30분에 시작된다",
     author:"김유진", 
     price:"13,500원",
    type:"자기계발서"}
    
return (
    <div>
        <h1>이번주 베스트셀러</h1>
        <img src= {books} />
        <h2>{book.title}</h2>
        <p>저자:{book.author}</p>
        <p>판매가:{book.price}</p>
        <p>구분:{book.type}</p>
    </div>

  )
}
