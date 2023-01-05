import React, { useState } from 'react';

export default function ArrState() {
  const [state, setState] = useState([0]); //값이 0인것. 아래 state는 0번째 배열을 뜻함
  console.log(state);

  return (
    <div>
      {state[0]}
      <br />
      <button
        onClick={() => {
          state[0] = 1;
          const copyArr = [...state];
          setState(copyArr);
          console.log(state);
        }}
      >
        +1
      </button>
    </div>
  );
}
