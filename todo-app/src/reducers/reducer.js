import { CREATE, DONE  } from "../store/modules/todo";

// 리듀서 (설정한 state값을 외부에서 접근하기위해선 reducer를 통해 값을 return 시켜줘야한다.)
export default function todo(state = initState, action) {
    switch (action.type) {
      case CREATE:
        return {
          ...state,
          list: state.list.concat({
            // concat 은 값이 추가된 배열을 리턴해준다!
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          }),
          nextID: action.payload.id + 1,
        };
      case DONE:
        return {
          ...state,
          list: state.list.map((el) => {
            if (el.id === action.id) {
              return {
                ...el,
                done: true,
              };
            } else {
              return el;
            }
          }),
        };
      default: //switch는 기본으로 dafault를 작성해줘야한다.
        return state;
    }
  }
  //액션타입에 따라 작동하는 리듀서 구현
  