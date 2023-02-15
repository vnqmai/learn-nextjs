import { Link as MuiLink } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import Link from 'next/link'
import { ROUTES_HEADER } from './routes'

const HeaderDesktop = () => {
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction={'row'} justifyContent="end">
          {ROUTES_HEADER.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              <MuiLink sx={{ ml: 2 }}>{route.label}</MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default HeaderDesktop
