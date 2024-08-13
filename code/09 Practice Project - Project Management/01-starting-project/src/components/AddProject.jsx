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

const Div2 = styled.div`
        display: flex;
        margin-top: 1rem;
        padding: 3rem;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.8rem;
    
        & h2 {
            font-size: 1.2rem;
            font-weight: 700;
        }
    `
export default function AddProject({getData , newProject, clickTitle}) {
    const [projects, setProjects] = useState([]);

    // 입력 필드의 값을 관리
    const [inputValues, setInputValues] = useState({
        TITLE: '',
        DESCRIPTION: '',
        DUEDATE: '2024-08-11'
    });

    // task 입력값
    const [task, setTask] = useState([]);
    const inputTask = useRef();

    function onChangeText() {
        const newTask = inputTask.current.value.trim();
        // 새로운 task 값을 현재 task 배열에 추가
        setTask(prevTask => [...prevTask, newTask]);
        console.log("Added task:", newTask);
        // 입력 필드를 초기화
        inputTask.current.value = '';
    }
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

    function isAddTask() {
        let taskList = {...task}

    }

    return (
        <>
            {/*프로젝트 선택안한 경우*/}
            {getData === 1 && <Div>
                <img src={logo} alt="No Project Selected"/>
                <h1>No Project Selected</h1>
                <span>Select a project or get started with a new one</span>
                <Button btnName="Create new project"/>
            </Div> }
            {getData === 0 &&
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
            {getData ===2 &&
                <Div2>
                    <section>
                        <h2>
                            {clickTitle.TITLE}
                        </h2>
                        <p>{clickTitle.DUEDATE}</p>
                        <span>{clickTitle.DESCRIPTION}</span>
                        <hr/>
                    </section>
                    <section>
                        <h2>TASK</h2>
                        <div style={{display: 'flex', flexDirection: 'row', gap: '15px'}}>
                            <Input element="input" type="text" isRef={inputTask}/>
                            <Button btnName="Add Task" onClick={onChangeText}/>
                        </div>
                        <div>
                            {task.map((task, index) => (
                                <span key={index}>{task}</span>
                            ))}
                        </div>
                    </section>
                </Div2>}
        </>

    );
};