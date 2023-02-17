import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Icon, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  const links = [
    {
      icon: Facebook,
      href: 'https://facebook.com',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
    },
    {
      icon: LinkedIn,
      href: 'https://linkedin.com',
    },
  ]
  return (
    <Box component={'footer'} py={2} textAlign={'center'}>
      <Stack direction={'row'} justifyContent={'center'}>
        {links.map((link, index) => (
          <Box
            key={index}
            component={'a'}
            p={2}
            href={link.href}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <Icon component={link.icon} sx={{ fontSize: 48 }} />
          </Box>
        ))}
      </Stack>

      <Typography>Copyright ©{new Date().getFullYear()} All rights reserved </Typography>
    </Box>
  )
}
