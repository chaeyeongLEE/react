import React, { useRef } from 'react'

export default function Main() {
  const ref = useRef(null);

  const handleClick = () => {
    console.log(ref.current.value);
  };

  return (
    <div>
    <h3>차곡차곡 쌓아나가는 나의 문화기록</h3>
    <form action='/board'>
      <input type="date"></input>  <br />
      책 제목 : <input type="text" placeholder="타이틀 입력" id='title' onChange='printTitle'></input>
      <br />
      후기 작성 : <input type="text" placeholder="내용 입력" id='review'></input>
    <br />
    <input type="submit"  value="submit" onClick={handleClick}></input>
  </form>
    </div>

  )
};
