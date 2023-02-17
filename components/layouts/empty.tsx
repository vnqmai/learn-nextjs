import { ILayoutProps } from '@/interface/models/common'

function EmptyLayout(props: ILayoutProps) {
  const { children } = props
  return <>{children}</>
}

export default EmptyLayout
