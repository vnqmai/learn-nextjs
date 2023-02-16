// import { authApi } from '@/api'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()
  const { profile, login, logout } = useAuth({ revalidateOnMount: false })
  const handleLogin = async () => {
    try {
      // authApi.login({ username: 'test', password: '123456' })
      await login()
      console.log('redirect to admin')
      router.push('/admin')
    } catch (error) {
      console.log('failed to login', error)
    }
  }
  // const handleGetProfile = () => {
  //   try {
  //     authApi.getProfile()
  //   } catch (error) {
  //     console.log('failed to get profile', error)
  //   }
  // }
  const handleLogout = async () => {
    try {
      // authApi.logout()
      await logout()
      console.log('redirect to login')
    } catch (error) {
      console.log('failed to logout', error)
    }
  }

  return (
    <div>
      <div>Login page</div>
      <div>Profile: {JSON.stringify(profile, null, 4)}</div>
      <div>
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleGetProfile}>Get Profile</button> */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
