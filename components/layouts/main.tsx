import { ILayoutProps } from '@/interface/common'
import Link from 'next/link'

function MainLayout(props: ILayoutProps) {
  const { children } = props
  return (
    <div>
      <div>Main layout</div>
      <div>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
        <Link href={'/admin'}>
          <a>Admin</a>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
