import { PostItem } from '@/components/blogs'
import MainLayout from '@/components/layouts/main'
import { Post } from '@/interface/models'
import { getMarkDownData } from '@/utils/getMarkDownData'
import { Container, Divider } from '@mui/material'
import { Box } from '@mui/system'

export interface IBlogsPageProps {
  posts: Post[]
}

export default function BlogsPage({ posts }: IBlogsPageProps) {
  return (
    <Box py={3}>
      <Container>
        {posts.map((post) => (
          <>
            <PostItem key={post.id} post={post} />
            <Divider sx={{ my: 3 }} />
          </>
        ))}
      </Container>
    </Box>
  )
}

BlogsPage.Layout = MainLayout

export const getStaticProps = async () => {
  const data = await getMarkDownData()
  return {
    props: {
      posts: data,
    },
  }
}
