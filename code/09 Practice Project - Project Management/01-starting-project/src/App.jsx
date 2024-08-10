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
    const [currentState, setCurrentState] = useState(0);
    const [data, setData] = useState(1);
    // data :1 => 초기 아무것도 선택되지않았을 때
    // data :0 => 초기 아무것도 선택되지않았을 때

    const getData = childData => {
        setData(childData);
    };

    return (
        <Div>
            <SideBarWrapper>
                <SideBar getData={getData} />
            </SideBarWrapper>
            <AddProjectWrapper>
                <AddProject getData={data} />
            </AddProjectWrapper>
        </Div>
    );
}
export default App;
