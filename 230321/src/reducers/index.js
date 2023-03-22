import * as types from '../actions/ActionTypes'


const weight = 100;
//const height = 155;

function reducer(state = weight, action) {
    if(types.PLUS){
        state++;
        return state;
    } else if (types.MINUS) {
        state--;
        return state;
      } else {
        return state;
      }
}

function reducer2(state = height, action) {
    if (types.PLUSH) {
      state++;
      return state;
    } else if (types.MINUS) {
      state--;
      return state;
    } else {
      return state;
    }
  }