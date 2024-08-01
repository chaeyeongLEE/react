import { PLUS, MINUS } from '../actions/ActionTypes';

const initialState = 50;

// const weight = (state=initialState, action)=>{
//     switch(action.type){
//         case types.PLUS :
//             return{
//                 weight: state.weight +1
//             };
//         case types.MINUS :
//             return{
//                 weight:state.weight -1
//             };
//         default:
//             return state;
//     }
// }
const weight = (state = initialState, action) => {
  const { type } = action;
  if (type === PLUS) {
    return state + 1;
  }
  if (type === MINUS) {
    return state - 1;
  }
  return state;
};
export default weight;
