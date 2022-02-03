import './App.css';
import Header from './components/Header/Header';
import {Button, Container} from '@mui/material'
import {HomeRounded} from '@mui/icons-material';

function App() {
  return (
    <Container maxWidth="false" id='main-container'>
      <Header />
    </Container>
  );
}

export default App;
