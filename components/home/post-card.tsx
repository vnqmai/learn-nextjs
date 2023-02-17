import { Post } from '@/interface/models'
import { Card, CardContent, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import moment from 'moment'

export interface IPostCardProps {
  post: Post
}

export function PostCard({ post }: IPostCardProps) {
  if (!post) return null

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight={'bold'} pb={2}>
          {post.title}
        </Typography>
        <Box sx={{ display: 'flex' }} pb={2}>
          <Typography variant="body1">
            {moment(post.publishedDate).format('DD MMM YYYY')}
          </Typography>
          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
          <Typography variant="body1">{post.tagsList.join(', ')}</Typography>
        </Box>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  )
}
