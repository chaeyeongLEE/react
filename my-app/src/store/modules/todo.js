//todo list이므로 객체가 담긴 배열 형태로 선언
// list 객체에는 id, text,done의 객체값을 생성할 것

const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '취업하기',
      done: false,
    },
  ],
};

let counts = initState.list.length;
initState['nextID'] = counts;

// 액션 타입 정의하기
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';
//todo/의 이유는 이 액션의 타입이 어떤 모듈의 타입인지를 알려주려 편하게 사용되는 방법
//리듀서가 해야하는 일을 원시적으로 작성한 것이다.

// 액션 생성 함수 설정
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}
//payload는 데이터를 나르는 역할(생성하는거니까)

//
export function done(id) {
  return {
    type: DONE,
    id,
  };
}
//어떤 목록이 완료되었는지만 알면되기때문에 id값만 받아오도록

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
