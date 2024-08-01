import { CREATE, DONE  } from "../store/modules/todo";


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