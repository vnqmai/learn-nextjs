import { useRouter } from 'next/router'
import AdminLayout from '../components/layouts/admin'
import { useAuth } from '../hooks'

interface IAdminPageProps {}

function Admin(props: IAdminPageProps) {
  const router = useRouter()
  const { profile, logout } = useAuth({})

  const handleLogout = async () => {
    try {
      // authApi.logout()
      await logout()
      console.log('redirect to login')
      router.push('/login')
    } catch (error) {
      console.log('failed to logout', error)
    }
  }

  return (
    <div>
      <div>Admin page - no unmount/mount effect</div>
      <div>Profile: {JSON.stringify(profile)}</div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

Admin.Layout = AdminLayout

export default Admin
