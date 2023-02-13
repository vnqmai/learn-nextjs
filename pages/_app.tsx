import axiosClient from '@/api/axios-client'
import EmptyLayout from '@/components/layouts/empty'
import { AppPropsWithLayout } from '@/interface/common'
import '@/styles/globals.css'
import { createEmotionCache, theme } from '@/utils/index'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { SWRConfig } from 'swr'

const clientSideEmotionCache = createEmotionCache()
function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
