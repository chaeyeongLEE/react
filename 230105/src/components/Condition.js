import React, { useState } from 'react';

export default function Condition() {
  // const [condition, setCondition] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> 👍 </button>

      <br />
      {count}
      <br />

      <span>{setCount > 10 ? '👍' : '😎'} </span>
    </div>
  );
}

// 버튼 속의 엄지가 표정으로 바뀌어야함.
