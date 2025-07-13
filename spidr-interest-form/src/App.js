import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import InterestForm from './components/InterestForm';
import theme from './theme';
import { CssBaseline, Box } from '@mui/material';
import './App.css';
import SpiderwebImage from './pngtree-purple-spider-web-on-black-cobweb-texture-trap-photo-image_19254.jpg';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const maskImage = `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 100px, transparent 250px), radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,170,255,0.2) 100px, transparent 250px)`;


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="App"
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
          padding: 4,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${SpiderwebImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'hue-rotate(-65deg)',
            maskImage: maskImage,
            WebkitMaskImage: maskImage, // For Safari compatibility
            zIndex: 1,
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <InterestForm />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
