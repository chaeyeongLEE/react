import logo from '../assets/no-projects.png'
import {styled} from "styled-components";

export default function AddProject() {
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
        & button {
            padding: 0.4rem;
            border-radius: 0.6rem;
            color: #ffffff;
            background-color: #8a8888;
        }
        & button:hover {
            opacity: 0.7;
            transition: all 0.31s ease-in-out;
        }
        
        
        
    `

    return (
        // 프로젝트 선택안한 경우
        <Div>
            <img src={logo} alt="No Project Selected" />
            <h1>No Project Selected</h1>
            <span>Select a project or get started with a new one</span>
            <button>Create new project</button>
        </Div>
        // 프로젝트 선택한 경우
    );
};