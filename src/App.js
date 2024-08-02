import './App.css';
import { Container, Box } from '@mui/material';
import PersonalInfo from './Components/PersonalInfo';
import Summary from './Components/Summary';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Projects from './Components/Projects';

function App() {
  return (
    <div>
      <Container maxWidth="md">
        <PersonalInfo />
        <Summary />
        <Education />
        <Experience />
        {/* Apply page-break class here */}
        <Box className="page-break">
          <Skills />
        </Box>
        <Projects />
      </Container>
    </div>
  );
}

export default App;
