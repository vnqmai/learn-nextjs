import { Post } from '@/interface/models'
import { Container, Link as MuiLink, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import Link from 'next/link'
import { PostCard } from './post-card'

export interface IRecentPostsProps {}

export function RecentPosts(props: IRecentPostsProps) {
  const posts: Post[] = [
    {
      id: '1',
      title: 'Making a design system from scratch',
      publishedDate: 1676568874645,
      tagsList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: '2',
      title: 'Creating pixel perfect icons in Figma',
      publishedDate: 1676568874645,
      tagsList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ]
  return (
    <Box sx={{ bgcolor: 'secondary.light' }} py={4}>
      <Container>
        <Stack
          direction={'row'}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems={'center'}
        >
          <Typography variant="h5" pb={2}>
            Recent posts
          </Typography>
          <Link href="/blog" passHref>
            <MuiLink sx={{ display: { xs: 'none', md: 'inline-block' } }}>View all</MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{
            '& > div': {
              width: { xs: '100%', md: '50%' },
            },
          }}
        >
          {posts.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
