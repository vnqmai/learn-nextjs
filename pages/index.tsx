import { Seo } from '@/components/common/seo'
import { HeroSection, RecentPosts } from '@/components/home'
import { FeaturedWorks } from '@/components/home/feature-works'
import MainLayout from '@/components/layouts/main'

const Home = () => {
  return (
    <>
      <Seo
        title={'Nextjs - vnqmai learning'}
        description={"I'm learning NextJS."}
        url={'https://learn-next-js-ten.vercel.app/'}
        thumbnailUrl={'https://www.quanle.me/wp-content/uploads/2021/07/nextjs.png'}
      />
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </>
  )
}

Home.Layout = MainLayout

export default Home
