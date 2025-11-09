import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid gray', borderRadius: '8px', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '1.5rem' }}>Current Count: {count}</p>
      <div>
        <button style={{ margin: '5px', padding: '10px 15px' }} onClick={() => setCount(count + 1)}>Increment</button>
        <button style={{ margin: '5px', padding: '10px 15px' }} onClick={() => setCount(count - 1)}>Decrement</button>
        <button style={{ margin: '5px', padding: '10px 15px' }} onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
