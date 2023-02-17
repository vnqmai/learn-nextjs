import { Work } from '@/interface/models'
import { Box, Chip, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import moment from 'moment'
import Image from 'next/image'

export interface IWorkCardProps {
  work: Work
}

export function WorkCard({ work }: IWorkCardProps) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} py={2} spacing={2}>
      <Box width={{ xs: '100%', sm: '246px' }} flexShrink={0}>
        <Image src={work.thumbnailUrl} alt="" width={246} height={180} layout="responsive" />
      </Box>

      <Box>
        <Typography variant="h4" fontWeight={'bold'} mb={2}>
          {work.title}
        </Typography>

        <Stack direction={'row'} alignItems={'center'} spacing={2} mb={2}>
          <Chip color="secondary" label={moment(Number.parseInt(work.createdAt)).year()} />
          <Typography color={'GrayText'}>{work.tagsList.join(', ')}</Typography>
        </Stack>

        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  )
}
