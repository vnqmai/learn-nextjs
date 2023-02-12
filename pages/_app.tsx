import axiosClient from '@/api/axios-client'
import EmptyLayout from '@/components/layouts/empty'
import { AppPropsWithLayout } from '@/interface/common'
import '@/styles/globals.css'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp
