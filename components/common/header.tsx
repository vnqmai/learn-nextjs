import { Box } from '@mui/system'

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <Box component={'header'} py={2}>
      Header
    </Box>
  )
}
