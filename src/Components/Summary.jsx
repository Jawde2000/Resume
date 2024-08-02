import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const Summary = () => {
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
        Summary
      </Typography>
      <Divider />  
      <Box sx={{ textAlign: 'justify', mt: 2 }}>
        <Typography>
          Ambitious and proficient recent graduate in Computer Science with a strong 
          enthusiasm for creating innovative software solutions. 
          Skilled in multiple programming languages such as C++, Python, and .NET, with experience 
          in creating web and mobile applications, designing databases, and troubleshooting software.
          Seeking for an internship from September 23 2024 to February 7 2025.
        </Typography>
      </Box>
    </Box>
  );
};

export default Summary;