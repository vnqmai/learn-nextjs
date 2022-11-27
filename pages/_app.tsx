import EmptyLayout from '@/components/layouts/empty'
import { AppPropsWithLayout } from '@/interface/common'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
