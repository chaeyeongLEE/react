/*
  action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
*/

import * as types from './ActionType';
// increment와 decrement는 어차피 1씩 더하고 빼기 때문에 따로 필요한 값 없이
// type만 지정이된 객체를 만들어 줍니다.

export const increment = () => ({
    type : types.INCREMENT
})

export const decrement = () => ({
    type : types.DECREMENT
})

// 다른 액션 생성자들과는 달리, 파라미터를 가지고 있습니다.
export const setColor = (color) => ({
    type : types.SET_COLOR,
    param: color
});
