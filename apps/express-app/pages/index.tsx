import { startTransition, useState } from 'react'
import useSWR from 'swr'

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => res?.data)

export default () => {
  const [a, setA] = useState<number>(1)
  const [b, setB] = useState<number>(1)
  const { data } = useSWR(`/api/sum?a=${a}&b=${b}`, fetcher)
  const { data: rsData } = useSWR(`/api/sum_rs?a=${a}&b=${b}`, fetcher)

  return (
    <div>
      <input
        type='number'
        defaultValue={a}
        onChange={(e) => {
          startTransition(() => {
            setA(+e.target.value)
          })
        }}
      />{' '}
      +
      <input
        type='number'
        defaultValue={b}
        onChange={(e) => {
          startTransition(() => {
            setB(+e.target.value)
          })
        }}
      />{' '}
      ={' '}
      <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <div>Node.js: {!data ? 'loading' : data || 0}</div>
        <div>Rust: {!rsData ? 'loading' : rsData || 0}</div>
      </div>
    </div>
  )
}
