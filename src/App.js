import React, { useState } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Showcase from './components/Showcase';
import AboutMe from './components/pages/AboutMe';

function App() {
  const [activeSection, setActiveSection] = useState('showcase'); // Set the initial active section to 'showcase'

  return (
    <div>
      <Navigation setActiveSection={setActiveSection} />
      {activeSection === 'showcase' && <Showcase />}
      {activeSection === 'aboutme' && <AboutMe />}
      <Footer />
    </div>
  );
}

export default App;
