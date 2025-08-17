import React from 'react';
import { Box, Container, Typography, LinearProgress, Grid } from '@mui/material';

const skills = [
   { name: 'HTML', value: 95 },
   { name: 'CSS', value: 80 },
   { name: 'Bootstrap', value: 85 },
   { name: 'SQL', value: 70 },
   { name: 'React.js', value: 90 },
   { name: 'Node.js', value: 88 },
   { name: 'JavaScript', value: 77 },
 
];

export default function Skills() {
  const skillChunks = [
    skills.slice(0, 2),
    skills.slice(2, 4),
    skills.slice(4, 6),
    skills.slice(6, 7),
  ];
  return (
    <Box id="skills" sx={{ py: 10,backgroundColor: '#EEE8AA' }} >
      <Container>
        <Typography variant="h3" textAlign="center" gutterBottom color='#FA8072'>Skills</Typography>
        <hr/>
        <Grid container spacing={4}>
          {skillChunks.map((chunk, idx) => (
            <Grid size={4} key={idx}>
              {chunk.map((skill, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography color='#663399' variant='h5'>{skill.name}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.value}
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
