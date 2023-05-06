import type { NextPage } from 'next'
import { AppType } from '@infras/shared/types'
import { sum } from '@infras/shared/utils'
import { Component } from '@infras/ui/react'

const Home: NextPage<{ foo: number }> = (props) => {
  console.log('帐号')
  return (
    <div className='py-0 px-8'>
      <h2>Next.js App</h2>
      {props.foo && <p>aaaaaa</p>}
      <p>AppType.Web: {AppType.Web}</p>
      <p>sum(1, 1): {sum(1, 1)}</p>
      <Component />
    </div>
  )
}

export default Home
