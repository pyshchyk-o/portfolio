import React from 'react';

import Navbar from './components/Navbar/index';
import About from './components/About/index';
import Projects from './components/Projects/index';
import Contact from './components/Contact/index';
import Hobbies from './components/Hobbies';

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
};

export default App;
