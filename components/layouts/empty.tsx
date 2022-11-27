import { ILayoutProps } from '@/interface/common'

function EmptyLayout(props: ILayoutProps) {
  const { children } = props
  return <>{children}</>
}

export default EmptyLayout
