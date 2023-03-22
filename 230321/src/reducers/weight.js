import * as types from '../actions/ActionTypes';

const initialState={
    weight : 50
};

const weight = (state=initialState, action)=>{
    switch(action.type){
        case types.PLUS :
            return{
                weight: state.weight +1
            };
        case types.MINUS :
            return{
                weight:state.weight -1
            };
        default:
            return state;    
    }
}

export default weight;