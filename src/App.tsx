import React, { useState } from 'react';

export const App = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div>
      <p>Hello, world</p>
      <div style={{ display: 'flex', marginTop: '1em' }}>
        <button
          style={{ marginRight: '0.5em' }}
          onClick={() => setClickCount(clickCount + 1)}
        >
          Click me!
        </button>
        <p>{clickCount}</p>
      </div>
    </div>
  );
};
