import { Work } from '@/interface/models/work'
import { Container, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { WorksList } from '../works'

export interface IFeaturedWorksProps {}

export function FeaturedWorks(props: IFeaturedWorksProps) {
  const works: Work[] = [
    {
      id: '1',
      title: 'Designing Dashboards',
      updatedAt: '1676568874645',
      createdAt: '1676568874645',
      tagsList: ['Express', 'Handlebars'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      thumbnailUrl:
        'https://res.cloudinary.com/duj7gbhw4/image/upload/v1676650284/Rectangle_30_ssb0nt.jpg',
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      updatedAt: '1676568874645',
      createdAt: '1676568874645',
      tagsList: ['Express', 'Handlebars'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      thumbnailUrl:
        'https://res.cloudinary.com/duj7gbhw4/image/upload/v1676650287/Rectangle_32_xyppce.jpg',
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      updatedAt: '1676568874645',
      createdAt: '1676568874645',
      tagsList: ['Express', 'Handlebars'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      thumbnailUrl:
        'https://res.cloudinary.com/duj7gbhw4/image/upload/v1676650278/Rectangle_34_h8ypel.jpg',
    },
  ]
  return (
    <Box py={4}>
      <Container>
        <Stack
          direction={'row'}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems={'center'}
        >
          <Typography variant="h5" pb={2}>
            Featured works
          </Typography>
        </Stack>

        <WorksList works={works} />
      </Container>
    </Box>
  )
}
