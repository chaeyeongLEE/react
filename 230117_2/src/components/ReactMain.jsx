import React from 'react'
import logo from '../logo.svg'
import styled from 'styled-components';
import {keyframes} from 'styled-components';

const RootDiv = styled.div`
    text-align: center;
`;

const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
`;
//기존 app.js에서 header태그였으니까 그대로 넣으면됨.
const rotation = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const AppLogo = styled.img `
  height: 40vmin;
  pointer-events: none;
  animation: ${rotation} infinite 20s linear;
`

const MyA = styled.a`
    color: #61dafb;
`

export default function ReactMain() {
  return (
    <RootDiv>
    <AppHeader>
      <AppLogo src={logo} alt="app" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <MyA
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </MyA>
    </AppHeader>
  </RootDiv>
  )
}
