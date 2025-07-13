import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // This will adjust text colors and other elements for a dark background
    primary: {
      main: '#00aaff',
    },
    background: {
      default: '#111',
      paper: '#1d1d1d' // A slightly lighter dark color for paper elements like the form
    },
    text: {
      primary: '#ffffff',
      secondary: '#a9a9a9'
    }
  },
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 700,
      color: '#ffffff'
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#a9a9a9',
          },
          '& label.Mui-focused': {
            color: '#00aaff',
          },
          '& .MuiOutlinedInput-root': {
            'backgroundColor': '#2d2d2d',
            '& input': {
              padding: '20px 14px 10px', // Increase top padding significantly
              lineHeight: '1.43', // Standard MUI line-height
            },
            '& fieldset': {
              borderColor: '#444',
            },
            '&:hover': {
              'backgroundColor': '#3d3d3d',
            },
            '&:hover fieldset': {
              borderColor: '#00aaff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00aaff',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            transform: 'translate(14px, -9px) scale(0.75)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 20px',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #00aaff 30%, #0088cc 90%)',
          color: 'white',
          '&:hover': {
            boxShadow: '0 3px 5px 2px rgba(0, 170, 255, .3)',
          },
        },
      },
    },
  },
});

export default theme;