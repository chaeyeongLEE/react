import { _SAVE } from "../actions"
import React from 'react'


const initialState = {
    lastId: 0,
    inputData:[
        {
            id:'',
            title:'',
            content:''
        }
    ]
}

const boardReducer = (state= initialState, action) => {
    switch(action.type){
        case _SAVE:
            console.log(state.inputData);
        return {
            lastId: state.lastId +1,
            inputData:state.inputData.concat({
                ...action.inputData,
                id: state.lastId +1,
            })
        } 
        default:
            return state
        }

}



export default boardReducer;