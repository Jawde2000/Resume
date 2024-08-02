import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const Projects = () => {
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
        Software Projects
      </Typography>
      <Divider />
      
      <Box sx={{ mb: 2 }}>
        <Typography 
            variant="h6"         
            sx={{ 
                fontWeight: 'bold', 
                fontFamily: '"EB Garamond", serif' // Apply Garamond font
            }}
        >
            Glo2Go (Degree Final Year Project)
        </Typography>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '4px' }}>Developed a travel planning platform.</li>
          <li style={{ marginBottom: '4px' }}>Designed for travelers to create itineraries, explore destinations.</li>
          <li style={{ marginBottom: '4px' }}>Technologies used: .NET (backend), React.js (frontend), PostgreSQL(Database) and RESTful API integration.</li>
        </ul>
      </Box>

      <Box sx={{ mb: 2 }}>
       <Typography 
            variant="h6"         
            sx={{ 
                fontWeight: 'bold', 
                fontFamily: '"EB Garamond", serif' // Apply Garamond font
            }}
        >
            ezKids (Degree Project)
        </Typography>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '4px' }}>Collaborated on a comprehensive system for managing kindergarten operations.</li>
          <li style={{ marginBottom: '4px' }}>Features included attendance tracking, event scheduling, and grading system.</li>
          <li style={{ marginBottom: '4px' }}>Technologies used: Django (backend), React.js (frontend - PC) & React Native (frontend - Mobile), PostgreSQL(Database) and RESTful API integration.</li>
        </ul>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography 
            variant="h6"         
            sx={{ 
                fontWeight: 'bold', 
                fontFamily: '"EB Garamond", serif' // Apply Garamond font
            }}
        >
            Food Ordering System (Degree Project)
        </Typography>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '4px' }}>Designed and developed a food ordering system with functionalities including adding new menu items, updating existing menu items, deleting menu items, and processing orders.</li>
          <li style={{ marginBottom: '4px' }}>Technologies used: Java, Object Oriented Programming logic is used.</li>
        </ul>
      </Box>

      <Box sx={{ mb: 2 }}>
       <Typography 
            variant="h6"         
            sx={{ 
                fontWeight: 'bold', 
                fontFamily: '"EB Garamond", serif' // Apply Garamond font
            }}
        >
            Etix (Diploma Final Year Project)
        </Typography>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '4px' }}>Developed a web-based bus ticket selling platform.</li>
          <li style={{ marginBottom: '4px' }}>Implemented user authentication, ticket inventory management, payment integration and implemented a QR code scanning system for bus entry validation.</li>
          <li style={{ marginBottom: '4px' }}>Technologies used: Django (backend), React.js (frontend) and PostgreSQL(Database) and RESTful API integration.</li>
        </ul>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography 
            variant="h6"         
            sx={{ 
                fontWeight: 'bold', 
                fontFamily: '"EB Garamond", serif' // Apply Garamond font
            }}
        >
            Money Diary (Diploma Project)
        </Typography>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '4px' }}>Contributed to the development of a money management application.</li>
          <li style={{ marginBottom: '4px' }}>Features included expense tracking and budget planning.</li>
          <li style={{ marginBottom: '4px' }}>Technologies used: Android Native and SQLite(Database).</li>
        </ul>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography 
            variant="h6"         
            sx={{ 
                fontWeight: 'bold', 
                fontFamily: '"EB Garamond", serif' // Apply Garamond font
            }}
        >
            Pandemonium-19 (Diploma Project)
        </Typography>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li style={{ marginBottom: '4px' }}>Features include case statistics, hotspot locations, selling Covid prevention items, and user-submitted stories related to Covid-19.</li>
          <li style={{ marginBottom: '4px' }}>Technologies used: PHP (backend), HTML5 (frontend) and MySql(Database).</li>
        </ul>
      </Box>
    </Box>
  );
};

export default Projects;
