import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const Skills = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography 
        variant="h7" 
        component="h2" 
        gutterBottom
        sx={{ 
          fontWeight: 'bold', 
          fontFamily: '"EB Garamond", serif' // Apply Garamond font
        }}
      >
        Skills
      </Typography>
      <Divider />  
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        <li style={{ marginBottom: '4px' }}>
          <Typography variant="body1" component="span" sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 'bold' }}>
            Programming Languages:
          </Typography>
          {' '}JavaScript, Python, Java, C#, C++, C, PHP
        </li>
        <li style={{ marginBottom: '4px' }}>
          <Typography variant="body1" component="span" sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 'bold' }}>
            Frameworks:
          </Typography>
          {' '}React.js, React Native, Android Native, Flutter, .NET, Django, Angular
        </li>
        <li style={{ marginBottom: '4px' }}>
          <Typography variant="body1" component="span" sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 'bold' }}>
            Tools:
          </Typography>
          {' '}Github Version Control, RESTful API Integration, Postman, Redux, Visual Studio, Visual Studio Code
        </li>
        <li style={{ marginBottom: '4px' }}>
          <Typography variant="body1" component="span" sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 'bold' }}>
            Databases:
          </Typography>
          {' '}PostgreSQL, MongoDB, MySQL
        </li>
        <li style={{ marginBottom: '4px' }}>
          <Typography variant="body1" component="span" sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 'bold' }}>
            Strengths:
          </Typography>
          {' '}Self-motivated, Self-learner, Teamwork, Energetic, Fast Adapter, Problem Solver
        </li>
        <li style={{ marginBottom: '4px' }}>
          <Typography variant="body1" component="span" sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 'bold' }}>
            Languages:
          </Typography>
          {' '}Mandarin, Malay, English, Hokkien
        </li>
      </ul>
    </Box>
  );
};

export default Skills;
