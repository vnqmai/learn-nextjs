import { EmotionCache } from '@emotion/cache'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement } from 'react'

export interface ILayoutProps {
  children: ReactElement
}

// https://nextjs.org/docs/basic-features/layouts
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (page: ILayoutProps) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  emotionCache: EmotionCache
}
