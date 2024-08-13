import AddProject from "./components/AddProject.jsx";
import SideBar from "./components/SideBar.jsx";
import {styled} from "styled-components";
import {useState} from "react";

    const Div = styled.div`
      display: flex;
      flex-direction: row;
      width: 100%;
    `;
    const SideBarWrapper = styled.div`
      width: 30%;
    `;
    const AddProjectWrapper = styled.div`
      width: 70%;
    `;

function App() {
    const [newProject, setNewProject] = useState([]);
    const [data, setData] = useState(1);
    // data :1 => 초기 아무것도 선택되지않았을 때
    // data :0 => 새 프로젝트 생성
    const [title, setTitle] = useState({});

    const getData = childData => {
        setData(childData);
    };

    const getProject = (projects) => {
        setNewProject(projects);
        console.log('projects:', projects)
    };

    const clickData = (project) => {
        setTitle(project);
        console.log(`Project clicked: ${project}`);
        // 여기에 추가적인 처리 로직을 추가할 수 있습니다.
    };

    return (
        <Div>
            <SideBarWrapper>
                <SideBar getData={getData} newProject={newProject} clickTitle={clickData} />
            </SideBarWrapper>
            <AddProjectWrapper>
                <AddProject getData={data} newProject={getProject} clickTitle={title}/>
            </AddProjectWrapper>
        </Div>
    );
}
export default App;
