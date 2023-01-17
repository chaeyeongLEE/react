import React from 'react'
import dogImg from '../dog.jpeg';
export default function Image() {

  return <>
   <img src="/images/dog.jpeg" alt="강아지" />
   <img src={dogImg} alt="강아지" />;
   </>
}
