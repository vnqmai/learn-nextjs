import avatarImage from '@/images/avatar.png'
import { Button, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import Image from 'next/image'

export interface IHeroSectionProps {}

export function HeroSection(props: IHeroSectionProps) {
  return (
    <Box component="section" pt={{ xs: 4, md: 20 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent={'flex-start'}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
          spacing={4}
        >
          <Box>
            <Typography component="h1" variant="h3" mb={{ xs: 2, md: 5 }}>
              Hi, I am John,
              <br />
              Creative Technologist
            </Typography>
            <Typography mb={{ xs: 2, md: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained" color="primary">
              Download Resume
            </Button>
          </Box>
          <Box>
            <Box
              sx={{
                width: '240px',
                boxShadow: '-5px 13px',
                color: 'secondary.light',
                borderRadius: '50%',
              }}
            >
              <Image src={avatarImage} layout="responsive" alt="" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
