import React from 'react';
import './App.css';
import TitlesAndIcons from './sections/TitlesAndIcns';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';

function App() {
  return (
    <div className="App">
      <div className = "navigation"></div>
      <TitlesAndIcons/>
      <AboutSection/>
      <SkillSection/>
     </div>
   
  );
}

export default App;
