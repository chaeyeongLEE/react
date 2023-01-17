import React from 'react'
import styled from 'styled-components';

const Mydiv = styled.div`
    background-color: yellow;
    `;

const MyHeading = styled.h1`
    color: blue;
    `;
// styled. 뒤에 어떤 태그인지 지정해주어야함.

const MySpan = styled.span`
    background-color: pink;
    font-weight:700;
    `;
    
export default function TestStyled() {
  return (
    <Mydiv>
        <MyHeading>h1 태그입니다</MyHeading>
        <MySpan>span 태그입니다</MySpan>
    </Mydiv>
  )
}
