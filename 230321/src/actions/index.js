// 액션들이 특정 카운터를 조작하도록 설정하는 곳
// 미리 수정하려는 액션들을 적어주는 것
import * as types from './ActionTypes';

export const plus = (weight) => ({
    type: types.PLUS,
    weight
});
export const MINUS = (weight) => ({
    type: types.MINUS,
    weight
});
export const PLUSH = (height) => ({
    type: types.PLUSH,
    height

});
export const MINUSH= (height) => ({
    type: types.MINUSH,
    height
});