import MainLayout from '../components/layouts/main'

interface IAboutPageProps {}

function About(props: IAboutPageProps) {
  return (
    <MainLayout>
      <div>about page - unmount/mount effect</div>
    </MainLayout>
  )
}

export default About
