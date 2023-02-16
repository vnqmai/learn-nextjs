import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export interface IAuthProps {
  children: any
}

export default function Auth(props: IAuthProps) {
  const { children } = props
  const router = useRouter()
  const { profile, firstLoading } = useAuth({})

  useEffect(() => {
    if (!firstLoading && !profile?.username) router.push('/login')
  }, [profile, firstLoading, router])

  if (!profile?.username) return <div>Loading...</div>
  return <div>{children}</div>
}
