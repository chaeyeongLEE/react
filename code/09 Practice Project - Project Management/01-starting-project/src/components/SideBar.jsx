import Button from "./Button.jsx";
import {styled} from "styled-components";

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
export default function SideBar({getData, newProject}) {
    function isAddProjectBtn() {
        let clickData = 0;
        getData(clickData);
    }
    return <Div>
        <p>new: {newProject.TITLE}</p>
        <h2>Your Projects</h2>
        <Button btnName="+Add project" onClick={isAddProjectBtn} />
    </Div>
};