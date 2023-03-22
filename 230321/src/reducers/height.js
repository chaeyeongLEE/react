import * as types from '../actions/ActionTypes';

const initialState={
    height : 155
};

const height = (state=initialState, action)=>{
    switch(action.type){
        case types.PLUSH :
            return{
                height: state.height +1
            };
        case types.MINUSH :
            return{
                height:state.height -1
            };
        default:
            return state;    
    }
}

export default height;