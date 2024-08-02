import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const Education = () => {
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
        Education
      </Typography>
      <Divider />  
      {/* Bachelor's Degree */}
      <Box sx={{ mb: 2 }}>
        <Typography 
          variant="h6" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold', 
            fontFamily: '"EB Garamond", serif' // Apply Garamond font
          }}
        >
          Universiti Teknologi Malaysia
        </Typography>
        <Typography variant="body1" gutterBottom>
          Bachelor of Computer Science (Computer Network & Security) with Honours
        </Typography>
        <Typography variant="body2" color="text.secondary">
          March 2022 - October 2025
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Diploma */}
      <Box>
        <Typography 
          variant="h6" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold', 
            fontFamily: '"EB Garamond", serif' // Apply Garamond font
          }}
        >
          Multimedia University
        </Typography>
        <Typography variant="body1" gutterBottom>
          Diploma in Information Technology
        </Typography>
        <Typography variant="body2" color="text.secondary">
          November 2019 - December 2021
        </Typography>
      </Box>
    </Box>
  );
};

export default Education;
