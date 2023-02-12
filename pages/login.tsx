import { authApi } from '@/api/index'

export default function LoginPage() {
  const handleLogin = () => {
    try {
      authApi.login({ username: 'test', password: '123456' })
    } catch (error) {
      console.log('failed to login', error)
    }
  }
  const handleGetProfile = () => {
    try {
      authApi.getProfile()
    } catch (error) {
      console.log('failed to get profile', error)
    }
  }
  const handleLogout = () => {
    try {
      authApi.logout()
    } catch (error) {
      console.log('failed to logout', error)
    }
  }

  return (
    <div>
      <div>Login page</div>
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleGetProfile}>Get Profile</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
