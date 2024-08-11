import Button from "./Button.jsx";
import { styled } from "styled-components";

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
`;

const TitleButton = styled.button`
    display: block;
    width: 100%;
    margin: 0.5rem 0;
    color: #ffffff;
    cursor: pointer;
    text-align: left;

    &:hover {
        background-color: #e0e0e0;
    }
`;

export default function SideBar({ getData, newProject }) {
    function isAddProjectBtn() {
        let clickData = 0;
        getData(clickData);
    }

    const handleTitleClick = (title) => {
        alert(`Clicked on: ${title}`);
    };

    return (
        <Div>
            <h2>Your Projects</h2>
            <Button btnName="+Add project" onClick={isAddProjectBtn} />
            {newProject.length > 0 ? (
                newProject.map((project, index) => (
                    <TitleButton key={index} onClick={() => handleTitleClick(project.TITLE)}>
                        {project.TITLE}
                    </TitleButton>
                ))
            ) : (
                <p>No projects available.</p>
            )}
        </Div>
    );
}
