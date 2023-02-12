import Cookies from 'cookies'
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
    // convert cookies to header Authorization
    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('access_token')
    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`
    }

    // dont send cookies to server
    req.headers.cookie = ''

    proxy.web(req, res, {
      target: 'https://js-post-api.herokuapp.com',
      changeOrigin: true,
      selfHandleResponse: false,
    })
    // res.status(200).json({ name: 'Hello world' })

    proxy.on('proxyRes', () => {
      resolve(true)
    })
  })
}
