import React, { useState } from 'react';
import { shuffle } from 'lodash-es';

const Component: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>count: {count}</p>
      <p>{shuffle([1,2,3,4])}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Add</button>
    </div>
  )
}

export default Component;
