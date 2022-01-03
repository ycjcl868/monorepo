import { useState } from 'react'
import useSWR from 'swr'

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => res?.data)

export default () => {
  const [a, setA] = useState<number>(1)
  const [b, setB] = useState<number>(1)
  const { data, error } = useSWR(`/api/sum?a=${a}&b=${b}`, fetcher)

  return (
    <div>
      <input
        type='number'
        defaultValue={a}
        onChange={(e) => setA(+e.target.value)}
      />{' '}
      +
      <input
        type='number'
        defaultValue={b}
        onChange={(e) => setB(+e.target.value)}
      />{' '}
      ={' '}
      <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        {error && <div>failed to load</div>}
        {!data ? (
          <div>loading...</div>
        ) : (
          <>
            <div>Node.js: {data?.node || 0}</div>
            <div>Rust: {data?.rust || 0}</div>
          </>
        )}
      </div>
    </div>
  )
}
