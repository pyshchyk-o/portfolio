import React from 'react';
import styles from './navnar.module.css'

const Navbar = ({ selectedNav, setSelectedNav }) => {
  const selectNavItem = (name) => setSelectedNav(name);

  return (
    <nav>
      <ul className={styles.nav}>
        <li className={selectedNav === 'home' ? styles.selected : ''} onClick={() => selectNavItem('home')}>Home</li>
        <li className={selectedNav === 'skills' ? styles.selected : ''} onClick={() => selectNavItem('skills')}>Skills</li>
        <li className={selectedNav === 'projects' ? styles.selected : ''} onClick={() => selectNavItem('projects')}>Projects</li>
        <li className={selectedNav === 'contact' ? styles.selected : ''} onClick={() => selectNavItem('contact')}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
