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

export default function SideBar({ getData, newProject, clickTitle }) {
    function isAddProjectBtn() {
        let clickData = 0;
        getData(clickData);
    }

    const handleTitleClick = (project) => {
        // newProject가 있으면 , clickData 2를 보내라
        let clickData  = 2;
        getData(clickData);
        clickTitle(project);
        console.log(`Clicked on: ${project}`);
    };

    return (
        // 내가 작성한 코드
        <Div>
            <h2>Your Projects</h2>
            <Button btnName="+Add project" onClick={isAddProjectBtn} />
            {newProject.length > 0 ? (
                newProject.map((project, index) => (
                    <TitleButton key={index} onClick={() => handleTitleClick(project)}>
                        {project.TITLE}
                    </TitleButton>
                ))
            ) : (
                <p>No projects available.</p>
            )}
        </Div>

        // 강의상 코드
        // <aside>
        //     <h2>Your Projects</h2>
        //     <div>
        //         <button>+Add project</button>
        //     </div>
        //     <ul></ul>
        // </aside>
)
    ;
}
