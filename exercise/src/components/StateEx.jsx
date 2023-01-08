import React from 'react'

export default function StateEx () {
  const dataArr = [
    {
      title:"남자 코트 추천",
      content: "2월 17일 발행"
    },
    {
        title:"여자 코트 추천",
        content: "2월 19일 발행"
    },
    {
        title:"코트 아무거나",
        content: "2월 27일 발행"
    }
  ]

  return (
    <div>
        {dataArr.map((el, index)=> {
          return (
            <div key={index}>
              <h2>{el.title}</h2>
              <p>{el.content}</p>
              <hr />
            </div>
          )
        }
      )}

        
    </div>
  )
}


