import React from 'react'
import { createStore } from 'redux';

const name = (state, action) => {
    if (state === undefined){
        return {
            name:'userA',
        };
    }
    if (action.type === 'change'){
        return {
            ...state, 
            name : action.name,
        };
    }
};
const store = createStore(name);

export default store;