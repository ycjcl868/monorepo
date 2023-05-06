function foo(): number {
  return 0
}

const num = 0
const Home = (props: {
  gender: number
  text: string
  obj: { gender: number }
}) => {
  const { gender, text } = props
  const isValid = true
  return (
    <div>
      {!!num && <p>Hello</p>}
      {!!gender && <p>Hello</p>}
      {!!gender && isValid && <p>Hello</p>}
      {!!props?.obj?.gender && <p>Hello</p>}
      {!!foo() && <p>Hello</p>}
      {text && <p>Hello</p>}
    </div>
  )
}

export default Home
