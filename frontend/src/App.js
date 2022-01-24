import './App.css';
import Header from './components/Header/Header';
import {Button, Paper, Container} from '@mui/material'
import {HomeRounded} from '@mui/icons-material';

function App() {
  return (
    <Container maxWidth="false" id='main-container'>
       <Header />
      <Button variant="text" color="error">
        The Batton
        <HomeRounded />
      </Button>
    
    </Container>
  );
}

export default App;
