import Auth from '@/components/common/auth'
import { ILayoutProps } from '@/interface/common'
import Link from 'next/link'

function AdminLayout(props: ILayoutProps) {
  const { children } = props
  return (
    <Auth>
      <div>Admin layout</div>
      <div>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
        <Link href={'/admin'}>
          <a>Admin</a>
        </Link>
      </div>
      <div>{children}</div>
    </Auth>
  )
}

export default AdminLayout
