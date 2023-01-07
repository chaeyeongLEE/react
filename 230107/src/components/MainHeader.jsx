import React from 'react'

export default function MainHeader(props) {
    const {text, href, userID } = props;
    // const obj = {
    //     str: "test",
    //     num: 10
    // }

    // const  { str , num} = obj;
    // console.log(obj.str);
    // console.log(obj.num);

  return (
  <div>
  <h1>{userID}님 반갑습니다!</h1>
  <a href={href}>{text}</a>
  </div>
  )
}