import React from 'react';
import { Typography, Box, Link, Grid } from '@mui/material';

const PersonalInfo = () => {
  return (
    <Box sx={{ mb: 4, textAlign: 'center' }}>
      <Grid container spacing={2} alignItems="center">
        {/* Contact Information */}
        <Grid item xs={12} sm={4} sx={{ textAlign: 'left' }}>
          <Typography variant="body2">
            Alor Setar, Kedah, Malaysia
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h5" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              mt: 5,
              fontFamily: '"EB Garamond", serif', // Apply Garamond font
            }}
          >
            CHEW ZHI PENG
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ textAlign: 'right' }}>
          <Typography variant="body2">
            +(60) 1173911332
          </Typography>
          <Typography variant="body2">
            <Link href="mailto:chewzhipeng@gmail.com" sx={{ textDecoration: 'none', color: 'inherit' }}>
              chewzhipeng@gmail.com
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        {/* Social Links */}
        <Grid item xs={12} sm={6} sx={{ textAlign: 'left' }}>
          <Typography variant="body2">
            <Link href="https://www.linkedin.com/in/zhi-peng-chew/" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit' }}>
              linkedin.com/in/zhi-peng-chew/
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
          <Typography variant="body2">
            <Link href="https://github.com/Jawde2000" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit' }}>
              github.com/Jawde2000
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInfo;
