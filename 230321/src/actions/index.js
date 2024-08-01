// 액션들이 특정 카운터를 조작하도록 설정하는 곳
// 미리 수정하려는 액션들을 적어주는 것

import { PLUS, MINUS, PLUSH, MINUSH } from './ActionTypes';

export const plus = () => {
    return{
    type: PLUS};
};

export const minus = () => {
    return {
        type: MINUS
    };
};
    
export const plush = () => {
    return {
        type: PLUSH
    };
};
export const minush= () => {
    return {
        type : MINUSH
    };
};