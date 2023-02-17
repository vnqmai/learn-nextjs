import { red } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// Create a theme instance.
export let theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif',
  },
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      light: '#EDF7FA',
      main: '#21243D',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243D',
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthMd: {
          '@media (min-width: 600px)': { maxWidth: '860px' },
        },
        maxWidthSm: {
          '@media (min-width: 600px)': { maxWidth: '680px' },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover, &.active': {
            color: '#FF6464',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained',
            color: 'primary',
          },
          style: {
            color: 'white',
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 2,
        },
      },
      variants: [
        {
          props: {
            color: 'secondary',
          },
          style: {
            color: 'white',
            backgroundColor: '#142850',
          },
        },
      ],
    },
  },
})

// theme.typography.h3 = {
//   fontSize: '2rem',
//   [theme.breakpoints.up('md')]: {
//     fontSize: '3rem',
//   },
// }

theme = responsiveFontSizes(theme)
