import { Link as MuiLink } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ROUTES_HEADER } from './routes'

const HeaderDesktop = () => {
  const router = useRouter()

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction={'row'} justifyContent="end">
          {ROUTES_HEADER.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              <MuiLink sx={{ ml: 2 }} className={clsx({ active: router.pathname === route.path })}>
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default HeaderDesktop
