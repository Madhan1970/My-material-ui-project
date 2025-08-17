import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


export default function Navbar() {
  return (
    <AppBar position="fixed" color="black">
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1,fontStyle:'Roboto,italic',color:'#FFB6C1' }}>My Portfolio Website</Typography>
        <Box>
           <Button 
        color='primary' 
        href="#home" 
        sx={{ 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '23px', 
          textTransform: 'revert-layer', 
          mx: 1
        }}
      >
        Home
      </Button>
      
      <Button 
        color='primary' 
        href="#about"
        sx={{ 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '23px', 
          textTransform: 'revert', 
          mx: 1
        }}
      >
        About
      </Button>
      
      <Button 
        color="primary" 
        href="#projects"
        sx={{ 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '23px', 
          textTransform: 'inherit', 
          mx: 1
        }}
      >
        Projects
      </Button>
      
      <Button 
        color="primary" 
        href="#skills"
        sx={{ 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '23px', 
          textTransform: 'unset', 
          mx: 1
        }}
      >
        Skills
      </Button>
      
      <Button 
        color="primary" 
        href="#services"
        sx={{ 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '23px', 
          textTransform: 'none', 
          mx: 1
        }}
      >
        Services
      </Button>
      
      <Button 
        color="primary" 
        href="#contact"
        sx={{ 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '23px', 
          textTransform: 'none', 
          mx: 1
        }}
      >
        Contact
      </Button>
      
      <Button
        variant="contained"  
        color="secondary"
        href="Manikandan Resume.pdf"
        target="_blank"
        sx={{ 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '12px', 
          textTransform: 'inherit', 
          mx: 1
        }}
      >
        Download Resume Here{<FileDownloadIcon />}
      </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
