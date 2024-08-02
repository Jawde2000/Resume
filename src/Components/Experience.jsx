import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const Experience = () => {
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
        Experience
      </Typography>
      <Divider />  
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">R&D Software Engineer Internship</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Keysight Technologies, Bayan Lepas, Penang - Mar-June 2021
        </Typography>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '4px' }}>Developed solution for transferring data.</li>
          <li style={{ marginBottom: '4px' }}>Collaborated with teams to design and implement new features.</li>
          <li style={{ marginBottom: '4px' }}>Implemented QR codes using AWS for data transferring.</li>
          <li style={{ marginBottom: '4px' }}>Involved in interface design improvements for PC and Mobile.</li>
        </ul>
      </Box>
    </Box>
  );
};

export default Experience;
