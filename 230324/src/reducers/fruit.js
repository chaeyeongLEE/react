import React from 'react'
import {SET_FRUIT_LIST} from "../actions/ActionTypes";

const initialState = {
    name: false,
    price: false,
};



export default function fruit(state=initialState, action) {
    switch(action.type){
        case SET_FRUIT_LIST :
            return {
                ...state, 
                name : action.fruitList,
            };
            default:
                return state;
    }
}
 
