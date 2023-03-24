import { PLUSH, MINUSH } from '../actions/ActionTypes';


const initialState={
    height : 155
};


// const height = (state=initialState, action)=>{

//     switch(action.type){
//         case types.PLUSH :
//             return{
//                 height: state.height +1
//             };
//         case types.MINUSH :
//             return{
//                 height:state.height -1
//             };
//         default:
//             return state;    
//     }
// }

const height = (state=initialState, action)=>{
const {type} = action;
if (type === PLUSH){
    return {...state, height:state.height+1}
}
if (type === MINUSH){
    return {...state, height:state.height-1}
} return state;
}

export default height;