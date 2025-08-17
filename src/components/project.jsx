import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const projects = [
  { title: 'HTML', img: 'https://cdn-icons-gif.flaticon.com/18534/18534809.gif', desc:'Designed and developed a structured, semantic HTML website showcasing clean markup and accessibility best practices.' },
  { title: 'CSS', img: 'https://cdn-icons-gif.flaticon.com/17122/17122651.gif', desc:'Crafted visually appealing and responsive layouts using CSS, enhancing the user experience with modern design techniques.' },
  { title: 'Bootstrap', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968672.png', desc:'Developed a fully responsive website using Bootstrap’s grid system and components, focusing on mobile-first design.' },
  { title: 'JavaScript', img: 'https://cdn-icons-gif.flaticon.com/19014/19014158.gif', desc:'Built dynamic website features like sliders, form validation, and smooth scrolling with vanilla JavaScript.' },
  { title: 'React.Js', img: 'https://cdn-icons-gif.flaticon.com/11324/11324115.gif', desc:'Created a modern single-page portfolio with React JS, using components and state management.' },
  { title: 'SQL', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968364.png', desc:'Designed a relational database in SQL Server, managing data integrity and backend integration.' },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: '#FF7F50' }}>
      <Container>
        <Typography variant="h4" textAlign="center" gutterBottom color='#f2eeecff'>My Projects</Typography>
        <hr/><br/>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid size={{xs:6,md:4}} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between', 
                  transition: 'transform 0.4s', 
                  '&:hover': { transform: 'scale(1.05)' } 
                }}
              >
                <CardMedia 
                  component="img" 
                  height="120" 
                  image={project.img} 
                  alt={project.title} 
                  sx={{ objectFit: 'contain', mt: 1 }} 
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>{project.title}</Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      display: '-webkit-box', 
                      WebkitLineClamp: 6, 
                      WebkitBoxOrient: 'vertical', 
                      overflow: 'hidden' 
                    }}
                  >
                    {project.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
