import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
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
  },
})
