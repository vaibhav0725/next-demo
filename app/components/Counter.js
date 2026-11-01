'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="row">
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      <button onClick={() => setCount(0)} style={{ background: 'transparent', color: 'inherit' }}>Reset</button>
    </div>
  );
}
