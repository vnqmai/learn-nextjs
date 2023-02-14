import { Box } from '@mui/system'

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <Box component={'footer'} py={2}>
      Footer
    </Box>
  )
}
