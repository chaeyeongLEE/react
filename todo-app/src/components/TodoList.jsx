//할일목록을 리덕스를 통해 Store에서 받아온 다음, 해당 목록을 <ul>,<li>로 받아온다.
import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create , done } from '../store/modules/todo' 



export default function TodoList() {
    const inputRef = useRef();
    //값을 받아줄 inputRef
    const list = useSelector((state)=> state.todo.list).filter(
        (el)=> el.done === false
    );
    //store에서 값받아오는 useSelector을 사용
    // 합쳐진 리듀서 중에서도 todo에 있는 값을 콜백함수로 받는다.
    // 그러면 index.js에서 todo로, todo.js의 값에 접근한 것
    
    const nextID = useSelector((state)=> state.todo.nextID);


    const dispatch = useDispatch();

    return (
    <section>
        <h1>할 일 목록</h1>
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={()=> {dispatch(create({id: nextID, text: inputRef.current.value}));
            inputRef.current.value = "";    
        }}
            >
            추가
            </button>
        </div>
        <ul>
            {list.map((el)=> {
                return <li key={el.id}>{el.text} <button onClick={()=>
                {dispatch(done(el.id));
                }}
                >완료
                </button> </li>;
            })}
        </ul>
    </section>
  );
}
