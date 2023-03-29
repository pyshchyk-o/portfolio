import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
// import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import Background from './components/Background';
import GradientBackground from './components/GradientBackground';
import ToggleAnimation from './components/ToggleAnimation/ToggleAnimation';
import GradientSwitcher from './components/GradientSwitcher/GradientSwitcher';

// TODO: save pref of animation in local storage

// const navItemsDefault = {
//   home: true,
//   skills: false,
//   projects: false,
//   contact: false,
// };

const gradientsDefault = {
  dark: 'dark',
  pastel: 'pastel',
  bright: 'bright',
  ukraine: 'ukraine',
};

const Home = () => {
  const [selectedNav, setSelectedNav] = useState('home');
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const [gradient, setGradient] = useState(gradientsDefault.dark);

  const onToggleAnimation = (val) => setAnimationEnabled(val);
  const onSetGradient = (val) => setGradient(val);

  return (
    <div className="container">

      <Head>
        <title>Olha Pyshchyk</title>
        <meta name="description" content="Olha Pyshchyk - Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className="home-page-container">
        {/*<AnimatedBackground />*/}
        <Background animationEnabled={animationEnabled}/>
        <GradientBackground gradient={gradient} animationEnabled={animationEnabled} />

        <div className="main-content-wrapper main-content-navbar">
          <Navbar selectedNav={selectedNav} setSelectedNav={setSelectedNav}/>
        </div>

        <div className="main-content-wrapper main-content-nav-items component-container">
          <div className={`component ${selectedNav === 'home' ? ' active' : ''}`}>
            <Main />
          </div>
          <div className={`component ${selectedNav === 'skills' ? ' active' : ''}`}>
            <Skills className={`component ${selectedNav === 'skills' ? ' active' : ''}`} />
          </div>
          <div className={`component ${selectedNav === 'projects' ? ' active' : ''}`}>
            <Projects className={`component ${selectedNav === 'projects' ? ' active' : ''}`} />
          </div>
          <div className={`component ${selectedNav === 'contact' ? ' active' : ''}`}>
            <Contacts className={`component ${selectedNav === 'contact' ? ' active' : ''}`} />
          </div>
        </div>

        <div
          className="main-content-wrapper main-content-gradient opacity-transition"
          style={{ ...(!animationEnabled && { opacity: 0 }) }}
        >
          <GradientSwitcher
            gradient={gradient}
            onSetGradient={onSetGradient}
          />
        </div>

        <div className="main-content-wrapper main-content-toggle">
          <ToggleAnimation
            animationEnabled={animationEnabled}
            onToggleAnimation={onToggleAnimation}
          />
        </div>
      </div>

    </div>
  );
}

export default Home;
