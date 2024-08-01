import { useState } from 'react';

export default function ex1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}
