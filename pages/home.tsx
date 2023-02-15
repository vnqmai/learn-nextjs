import { HeroSection } from '@/components/home'
import MainLayout from '@/components/layouts/main'

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <>
      <HeroSection />
    </>
  )
}

HomePage.Layout = MainLayout
