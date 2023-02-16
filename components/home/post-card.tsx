import { Post } from '@/interface/post'
import { Card, CardContent, Divider, Typography } from '@mui/material'
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
        <Typography variant="body1" pb={2} sx={{ display: 'flex' }}>
          {moment(post.publishedDate).format('DD MMM YYYY')}
          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
          {post.tagsList.join(', ')}
        </Typography>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  )
}
