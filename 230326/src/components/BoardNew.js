import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory} from 'react-router-dom';
import { dataSave } from '../actions/ActionTypes';
//import { dataSave } from '@modules/boardReducer';
import { uriSave } from '@modules/uriReducer'
export default function BoardNew() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch();

    //data dispatch 후 list 페이지로 이동하기 위해 선언
    const history = useHistory();
    const onSave = () => {
        // reducer 에 선언된 초기값과 동일한 타입으로 data 값 설정
        const _inputData = {
            id: '',
            title: title,
            content: content
        }
        // 리듀서의 dataSave 함수에 dispatch
        dispatch(dataSave(_inputData))
        // input값 reset
        setTitle('')
        setContent('')
         // data dispatch 후 페이지 이동
        history.push('/')
        dispatch(uriSave('/'))
    }
        const handleTitle = (e) => {
            setTitle(e.target.value)
        }
        const handleContent = (e) =>{
            setContent(e.target.value)
        }
  return (
    <div>
            <h2>글 작성</h2>
            <div>
                <div>
                    <input type='text' className='inputTitle' placeholder='제목을 입력하세요' onChange={handleTitle} value={title} />
                </div>
                <div>
                    <textarea className='inputContent' placeholder='내용을 입력하세요' onChange={handleContent} value={content} />
                </div>
                <div>
                    <button type='button' onClick={onSave}>submit</button>
                </div>
            </div>
        </div>
    )
}
