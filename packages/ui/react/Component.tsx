import React from 'react'
import { useState } from 'react'
import { map } from 'lodash-es'

const Component: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <p>count: {count}</p>
      <p>{map([1, 2, 3, 4])}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
    </div>
  )
}

export default Component
