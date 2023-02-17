import { Work } from '@/interface/models'
import { Divider } from '@mui/material'
import { Box } from '@mui/system'
import { Fragment } from 'react'
import { WorkCard } from './work-card'

export interface IWorksListProps {
  works: Work[]
}

export function WorksList({ works }: IWorksListProps) {
  if (works.length === 0) return null
  return (
    <Box>
      {works.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider />
        </Fragment>
      ))}
    </Box>
  )
}
