import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

export default function Hero() {
   const [showText, setShowText] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        backgroundImage: 'url(https://media.istockphoto.com/id/2178848997/photo/indian-software-development-working-on-coding-computer-screen-and-flowchart-at-night-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=VklnB2zgIJQXzuGJ_-yfNMNwQHNpU5A5DHrxD4f14zw=)',
        backgroundSize:'cover',
        backgroundPosition:'center',
        overlay:'auto',
        color:'#FFE4B5',
        display:'flex',
        flexDirection:'column',                                                          
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        paddingTop:'64px',
        transition:"" 
      }}
    >
       <Typography
        variant="h2"
        sx={{
          color: '#DB7093',
          opacity: showText ? 1 : 0,
          transform: showText ? 'translateY(-70)' : 'translateY(-80px)',
          transition: 'opacity 2.5s ease, transform 3.0s ease',
        }}
      >
        Hi I'M Manikandan<br/>Full-Stack Developer!!!
      </Typography>
    </Box>
  );
}
