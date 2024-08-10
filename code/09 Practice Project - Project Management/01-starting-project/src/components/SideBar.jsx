import Button from "./Button.jsx";
import {styled} from "styled-components";

export default function SideBar({getData}) {
    const Div = styled.div`
        display: flex;
        flex-direction: column;
        color: #ffffff;
        background-color: black;
        width: 270px;
        height: 500px;
        margin-top: 4rem;
        border-top-right-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
        padding: 2rem;
        gap: 1.3rem;
    `
    //props를 통해서 전달해라 값을. 0을 보내면 add...


    function isAddProjectBtn() {
        let clickData = 0;
        getData(clickData);
    }
    return <Div>
        <h2>Your Projects</h2>
        <Button btnName="+Add project" onClick={isAddProjectBtn} />
    </Div>
};