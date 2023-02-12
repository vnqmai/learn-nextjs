import { Cookies } from 'cookies'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createProxyServer } from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve) => {
    if (req.method !== 'POST') {
      res.status(404).json({ message: 'Method is not allowed.' })
    }

    // convert cookies to header Authorization
    const cookies = new Cookies(req, res)
    cookies.set('access_token')
    res.status(200).json({ message: 'logout successfully' })
  })
}
