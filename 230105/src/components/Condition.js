import React, { useState } from 'react';

export default function Condition() {
  // const [condition, setCondition] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> π </button>

      <br />
      {count}
      <br />

      <span>{setCount > 10 ? 'π' : 'π'} </span>
    </div>
  );
}

// λ²νΌ μμ μμ§κ° νμ μΌλ‘ λ°λμ΄μΌν¨.
