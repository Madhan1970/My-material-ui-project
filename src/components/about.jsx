import React from 'react';
import { Box, Grid, Typography, Avatar, Container } from '@mui/material';

export default function About() {
  return (
    <Box id="about" sx={{ py: 8,bgcolor:'#8FBC8F' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 8, md: 6 }}>
            <Avatar
              src="https://media.gettyimages.com/id/2151296073/photo/hispanic-latin-american-man-software-engineer-developer-use-computer-at-home-office-work-on.jpg?s=612x612&w=0&k=20&c=ubApy0Ya7bRVGqGySnAiPF0RJeHdDwDcnUOu5ekAVmI="
              alt="madhan"
              sx={{ width: 450, height: 400, marginleft: 'auto'}}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} >
            <Typography variant="h3" gutterBottom color='#FFD700'>About Me</Typography>
            <hr/>
            <Typography variant='h5'><strong>Name:</strong>Manikandan.M</Typography>
            <Typography variant='h5'><strong>Age:</strong>23</Typography>
            <Typography  variant='h5'><strong>DOB:</strong>19-09-2002</Typography>
            <Typography  variant='h5'><strong>Mobile No:</strong>6383124653</Typography>
            <Typography variant='h5'><strong>Education:</strong>B.Tech Chemical Engineering</Typography>
            <Typography variant='h5'><strong>Course Studied:</strong>Full-Stack Web Development</Typography>
            <Typography  variant='h5'><strong>Email Address:</strong>mm147809@gmail.com</Typography>
            <Typography variant='h5'><strong>State:</strong>Tamilnadu-622301</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
