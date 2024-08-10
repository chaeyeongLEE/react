import {styled} from "styled-components";

export default function Input({element, isChange, isRef, labelName, type}) {
    const Div = styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        & input {
            width: 550px;
            background-color: #d5d5d5;
            border-bottom: 1px solid #777676;
        }
        & textarea {
            width: 550px;
            background-color: #d5d5d5;
        }
    `

    return <Div>
        <label>{labelName}</label>
        {element === "input" ?
           <input onChange={isChange} ref={isRef} type={type}/> :
           <textarea onChange={isChange} ref={isRef}/>
        }
    </Div>
};