import { useState } from 'react';

export default function ReactCounter({ title }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{title}</h2>
      <div className="space-x-4">
        <button
          onClick={() => setCount(prevCount => prevCount - 1)}
          className="px-4 py-2 bg-blue-500 text-white"
        >
          -
        </button>
        <button
          onClick={() => setCount(prevCount => prevCount + 1)}
          className="px-4 py-2 bg-blue-500 text-white"
        >
          +
        </button>
        <span>{count}</span>
      </div>
    </>
  );
}
