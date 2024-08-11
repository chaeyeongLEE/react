import {styled} from "styled-components";

    const Div = styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        & input {
            width: 500px;
            background-color: #d5d5d5;
            border-bottom: 1px solid #777676;
        }
        & textarea {
            width: 500px;
            background-color: #d5d5d5;
        }
    `
export default function Input({element, isChange, isRef, labelName, type, name, value}) {

    return <Div>
        <label>{labelName}</label>
        {element === "input" ?
           <input onChange={isChange} ref={isRef} type={type} name={name} value={value} /> :
           <textarea onChange={isChange} ref={isRef} name={name} value={value} />
        }
    </Div>
};