// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from 'cookies'
import { createProxyServer, ProxyResCallback } from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.status(404).json({ message: 'Method is not allowed.' })
  }
  return new Promise((resolve) => {
    // console.log('login request')

    // dont send cookies to server
    req.headers.cookie = ''

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = ''
      proxyRes.on('data', (chunk) => {
        body += chunk
      })

      proxy.on('end', () => {
        try {
          const { accessToken, expiredAt } = JSON.parse(body)
          console.log(accessToken, expiredAt)
          console.log('res from proxied server:', body)

          // convert token to cookies
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV === 'development',
          })

          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          })

          // res.end('my response to cli') ->
          // ép kiểu
          ;(res as NextApiResponse).status(200).json({ message: 'login successfully' })
        } catch (error) {
          ;(res as NextApiResponse).status(500).json({ message: 'something went wrong' })
        }
        resolve(true)
      })
    }

    proxy.web(req, res, {
      target: 'https://js-post-api.herokuapp.com',
      changeOrigin: true,
      selfHandleResponse: true,
    })
    // res.status(200).json({ name: 'Hello world' })

    proxy.on('proxyRes', handleLoginResponse)
  })
}
