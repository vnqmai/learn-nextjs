import { authApi } from '@/api'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal'
// save profile
export const useAuth = (options: Partial<PublicConfiguration>) => {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    revalidateOnFocus: false,
    dedupingInterval: 60000, // 1hr
    ...options,
  })

  const firstLoading = profile === undefined && error === undefined

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
    firstLoading,
    error,
    login,
    logout,
  }
}
