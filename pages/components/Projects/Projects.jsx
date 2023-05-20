import * as React from 'react';
import Image from 'next/image';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <section>
      <h2 className={styles.projectsTitle}>Current projects</h2>
      <ul className={styles.projectsList}>
        <li>
          <Image src="/frame.svg" width={14} height={14} alt="nature" style={{ marginRight: '4px' }} />
          <span className={styles.description}>
            Co-Built: <a className={styles.link} href="https://mockupgenerator.co" target="_blank" rel="noopener noreferrer" aria-label="mockupgenerator.co">MockupGenerator</a>, a simple tool to make mockups for art prints. (2023)
          </span>
        </li>
        <li style={{ marginTop: '12px' }}>
          <Image src="/nature.svg" width={14} height={14} alt="nature" style={{ marginRight: '4px' }} />
          <span className={styles.description}>
            Co-Built: <a className={styles.link} href="https://makeprintable.ai" target="_blank" rel="noopener noreferrer" aria-label="makeprintable.ai">Make Printable</a>, a web app powered by AI for creating high-resolution printable assets. (2023)
          </span>
        </li>
        <li style={{ marginTop: '12px' }}>
          <Image src="/peanut.svg" width={14} height={14} alt="peanut" style={{ marginRight: '4px' }} />
          <span
            className={styles.description}
          >
            Co-Building: <a className={styles.link} href="https://runwildpeanut.com" target="_blank" rel="noopener noreferrer" aria-label="runwildpeanut.com">Run Wild Peanut</a>, a community and apparel store for outdoor and nature enthusiasts. Stay cozy and adventure on. (2023)
          </span>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
