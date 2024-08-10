import { styled } from "styled-components";

export default function Button({btnName, onClick}) {
    const Button = styled.button`
        padding: 0.4rem;
        border-radius: 0.4rem;
        color: #ffffff;
        background-color: #8a8888;
        width: fit-content;
        
        &:hover {
            opacity: 0.7;
            transition: all 0.31s ease-in-out;
        }
    `
    return (
        <Button onClick={onClick}>{btnName}</Button>
    );
};