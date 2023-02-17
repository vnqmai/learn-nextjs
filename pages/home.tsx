import { HeroSection, RecentPosts } from '@/components/home'
import { FeaturedWorks } from '@/components/home/feature-works'
import MainLayout from '@/components/layouts/main'

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <>
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </>
  )
}

HomePage.Layout = MainLayout
