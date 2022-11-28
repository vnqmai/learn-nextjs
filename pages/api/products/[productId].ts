import { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(404).json({ error: { message: 'not found' } })
  } else {
    res.status(200).json({ name: `Get product details ${req.query.productId}` })
  }
}
