import './App.css';

import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div id='main-container'>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path='/aboutme' element={<AboutMe/>} exact/>
      <Route path='/contact' element={<Contact/>} exact/>
      <Route path='/projects' element={<Projects/>} exact/>
      <Route path='/skills' element={<Skills/>} exact/>
      
    </Routes>
    </div>
  );
}

export default App;
