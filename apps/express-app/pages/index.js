export async function getServerSideProps() {
  const { sum } = require('@infras/shared/utils');
  const { sum: rsSum } = require('@infras/native');

  return {
    props: {
      node: sum(1, 1),
      rust: rsSum(1, 1),
    }, // will be passed to the page component as props
  }
}

export default (props) => {
  const { node, rust } = props;
  return (
    <div>
      <div>Node.js `sum(1, 1)`: {node}</div>
      <div>Rust `sum(1, 1)`: {rust}</div>
    </div>
  )
}
