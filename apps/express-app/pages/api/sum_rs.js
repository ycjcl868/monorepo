import { sum as rsSum } from '@infras/native'

const isNumber = (n) => typeof n === 'number'

export default function handler(req, res) {
  const { a, b } = req.query
  const aN = +a
  const bN = +b
  if (isNumber(aN) && isNumber(bN)) {
    return res.status(200).json({
      data: rsSum(aN, bN)
    })
  }
  res.status(200).json({
    data: 0
  })
}
