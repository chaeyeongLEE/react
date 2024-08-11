import logo from '../assets/no-projects.png'
import {styled} from "styled-components";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import {useRef, useState} from "react";

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
    `
export default function AddProject({getData , newProject}) {

    // const [project, setProject] = useState({
    //     TITLE:'', DESCRIPTION:'', DUEDATE:'2024-08-11'
    // })
    // const [project, setProject] = useState([]);
    //
    //
    // const handleChange = (e) => {
    //     const {name , value} = e.target;
    //     setProject(prevProject => ({...prevProject, [name]: value}));
    // }
    //
    // function saveProject(project) {
    //     console.log('project:', project)
    //
    //     if (project.TITLE !== '') {
    //         // let newData = {...project};
    //         project.push()
    //         newProject(newData);
    //
    //     }
    //     alert(JSON.stringify(project.TITLE) + ' 등록에 성공하였습니다.');
    // }

    // const inputValue = useRef();
    //
    // function onChangeText(){
    //     console.log(inputValue);
    //     setProject(inputValue.current.value);
    // }
    const [projects, setProjects] = useState([]);

    // 입력 필드의 값을 관리
    const [inputValues, setInputValues] = useState({
        TITLE: '',
        DESCRIPTION: '',
        DUEDATE: '2024-08-11'
    });

    // 입력 필드의 값 변경을 처리하는 함수
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const addProjectAndSave = () => {
        if (inputValues.TITLE !== '' || inputValues.DESCRIPTION !== '') {
            setProjects(prevProjects => [...prevProjects, inputValues]);
            setInputValues({
                TITLE: '',
                DESCRIPTION: '',
                DUEDATE: '2024-08-11'
            });

            newProject([...projects, inputValues]);
            alert('프로젝트가 등록에 성공하였습니다.');
        } else {
            alert('프로젝트의 TITLE 또는 DESCRIPTION을 입력하세요.');
        }
    };
    return (
        <>
            {/*프로젝트 선택안한 경우*/}
            {getData !== 0 ? <Div>
                <img src={logo} alt="No Project Selected"/>
                <h1>No Project Selected</h1>
                <span>Select a project or get started with a new one</span>
                <Button btnName="Create new project"/>
            </Div> :
            <Div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: '15px',
                    justifyContent: "flex-end",
                    marginLeft: "auto",
                    marginRight: "105px"
                }}>
                    <Button btnName="Cancel"></Button>
                    {/*<Button btnName="Save" onClick={() => saveProject(project)}></Button>*/}
                    <Button onClick={addProjectAndSave} btnName="Save Projects"></Button>
                </div>
                <Input element="input" labelName="TITLE" type="text" isChange={handleChange} name="TITLE" value={inputValues.TITLE} />
                <Input element="textarea" labelName="DESCRIPTION" isChange={handleChange} name="DESCRIPTION" value={inputValues.DESCRIPTION} />
                <Input element="input" labelName="DUE DATE" type="date" isChange={handleChange} name="DUEDATE" value={inputValues.DUEDATE} />
            </Div>
            }
            {/* 프로젝트 선택한 경우*/}
        </>

    );
};