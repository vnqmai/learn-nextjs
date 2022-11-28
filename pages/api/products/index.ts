import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // can call api here then take resposne and return to client
  res.status(200).json({ name: 'get products list' })
}

// http-proxy instead setup each handler above
