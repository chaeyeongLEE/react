import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { reset } from '../store/modules/mbti';
import OrangeButton from './OrangeButton';

export default function Show() {
    const result = useSelector((state)=> state.mbti.mbtiResult);
    const explaination = useSelector((state)=>state.mbti.explaination[result]);
    const dispatch = useDispatch();

    const Header = styled.p`
    font-size: 3em;`;

    const Explaination = styled.p`
    font-size: 1.5em;
    color: #777;`;

    const Result = styled.p`
    font-size: 3em;
    color: dodgerblue;`;
    
    const Additional = styled.p`
    font-size: 2em;
    color: orange;`;

    const AdditionalImg = styled.img`
    width: 500px;
    transform: translateX(-35px);`;

    
  return (
    <>
    <Header> 당신의 개발자 MBTI 결과는 ?</Header>
    <Explaination>{explaination.text}</Explaination>
    <Result> {result} </Result>
    <Additional>이건 재미로 읽어 보세요!</Additional>
    <AdditionalImg src={explaination.img} alt="팩폭" />
    <OrangeButton text="다시 검사하기" clickEvent={()=> dispatch(reset())} /> 
    
    </>
  )
}
//dispatch((reset()))에서 reset은 전달할 인자가 없으니까 ()안 공백