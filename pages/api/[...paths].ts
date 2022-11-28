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
  // dont send cookies to server
  req.headers.cookie = ''

  proxy.web(req, res, {
    target: 'https://js-post-api.herokuapp.com',
    changeOrigin: true,
    selfHandleResponse: false,
  })
  // res.status(200).json({ name: 'Hello world' })
}
