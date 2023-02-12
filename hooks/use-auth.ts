import { authApi } from '@/api/index'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal'
// save profile
export const useAuth = (options: Partial<PublicConfiguration>) => {
  const { data: profile, mutate } = useSWR('/profile', {
    revalidateOnFocus: false,
    dedupingInterval: 60000, // 1hr
    ...options,
  })

  const login = async () => {
    await authApi.login({ username: 'test', password: '123456' })
    await mutate() // call /profile api again
  }
  const logout = async () => {
    await authApi.logout()
    mutate({}, false)
  }

  return {
    profile,
    mutate,
    login,
    logout,
  }
}
