import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ background: 'linear-gradient(135deg, rgba(153, 194, 228, 1), rgba(205, 195, 181, 1))', py: 3, mt: 0 }}>
      <Container sx={{ textAlign: 'center' }}>
        <IconButton color="inherit" href='https://github.com/'><GitHub /></IconButton>
        <IconButton color="info" href='https://in.linkedin.com/'><LinkedIn /></IconButton>
        <IconButton color="primary" href='https://twitter.com/'><Twitter /></IconButton>
        <Typography variant="body2" sx={{ mt: 0 }}>
          &copy; 2025 Manikandan M. All Rights are Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
