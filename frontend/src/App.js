import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Button, Container} from '@mui/material'
import {HomeRounded} from '@mui/icons-material';

function App() {
  return (
    <Container maxWidth="false" id='main-container'>
      <Navbar />
    </Container>
  );
}

export default App;
