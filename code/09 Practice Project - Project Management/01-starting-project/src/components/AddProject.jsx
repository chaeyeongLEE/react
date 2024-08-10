import logo from '../assets/no-projects.png'
import {styled} from "styled-components";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function AddProject({getData}) {
    const Div = styled.div`
        display: flex;
        padding: 3rem;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        & img {
            width: 150px;
        }

        & h1 {
            font-size: 1.3rem;
            font-weight: 700;
        }

        & span {
            color: #8a8888;
        }
    `
    console.log('getData:', getData)
    return (
        <>
            <p>getData: {getData}</p>
            {/*프로젝트 선택안한 경우*/}
            {getData !== 0 ? <Div>
                <img src={logo} alt="No Project Selected"/>
                <h1>No Project Selected</h1>
                <span>Select a project or get started with a new one</span>
                <Button btnName="Create new project"/>
            </Div> : <Div>
                <Input element="input" labelName="TITLE" type="text"/>
                <Input element="textarea" labelName="DESCRIPTION"/>
                <Input element="input" labelName="DUE DATE" type="date"/>
            </Div>
            }
            {/* 프로젝트 선택한 경우*/}
        </>

    );
};