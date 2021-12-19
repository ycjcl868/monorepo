import React, { useState } from 'react';

const Component: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Add</button>
    </div>
  )
}

export default Component;
