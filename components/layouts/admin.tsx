import { ILayoutProps } from '@/interface/common'
import Link from 'next/link'

function AdminLayout(props: ILayoutProps) {
  const { children } = props
  return (
    <div>
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
    </div>
  )
}

export default AdminLayout
