import React from 'react';
import { Box, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';

const services = [
  { 
    img:'https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww', 
    title: 'Website Development', 
    desc: 'Building responsive websites.' 
  },
  { 
    img:'https://media.istockphoto.com/id/2166320051/photo/api-application-programming-interface-concept-a-programmer-types-on-a-laptop-interacting-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=8EiEs1YqOVRG6lJTZVD-dICovmJ-gGUbLyhresUkU-g=', 
    title: 'API Integration', 
    desc: 'Integrating RESTful APIs.' 
  },
  { 
    img:'https://plus.unsplash.com/premium_photo-1661692759400-15aa4e2de6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VVglMkZVSSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D', 
    title: 'UI/UX Design', 
    desc: 'Designing user-friendly interfaces.'
  },
];

export default function Services() {
  return (
    <Box id="services" sx={{ py: 8, backgroundColor: '#F5DEB3' }}>
      <Container>
        <Typography variant="h3" textAlign="center" gutterBottom color='#CD5C5C'>Services</Typography>
        <hr/><br/>
        <Grid container spacing={4}>
          {services.map((srv, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper elevation={3} sx={{ p: 3 }} style={{ backgroundColor: '#FFEFD5' }}>
                <CardMedia
                  component="img"
                  height="135"
                  image={srv.img}
                  alt={srv.title}
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography variant="h4" color='info.main'>{srv.title}</Typography>
                  <Typography color='textPrimary'>{srv.desc}</Typography>
                </CardContent>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
