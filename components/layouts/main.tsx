import { ILayoutProps } from '@/interface/common'
import { Box, Container } from '@mui/material'
import { Stack } from '@mui/system'
import Link from 'next/link'
import { Footer, Header } from '../common'

function MainLayout(props: ILayoutProps) {
  const { children } = props
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box flexGrow={1}>
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: 'red',
            // '@media (min-width: 600px)': { maxWidth: '680px' }
          }}
        >
          SM
        </Container>
        <Container maxWidth="md" sx={{ bgcolor: 'red' }}>
          MD
        </Container>
        <Box>
          <Link href={'/blog'}>
            <a>Blog</a>
          </Link>
        </Box>
        <Box>
          <Link href={'/works'}>
            <a>Works</a>
          </Link>
        </Box>

        {children}
      </Box>
      <Footer />
    </Stack>
  )
}

export default MainLayout
