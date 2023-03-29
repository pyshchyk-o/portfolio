import * as React from 'react';
import styles from './skills.module.css';

const Skills = () => {
  return (
    <section className={styles.skillsContainer}>
      <h2 className={styles.skillsTitle}>Skills:</h2>
      <ul className={styles.skillsList}>
        <div className={styles.skillsWrapper}>
          <li>HTML &#x2022;</li>
          <li>&nbsp;CSS &#x2022;</li>
          <li>&nbsp;JavaScript</li>
        </div>

        <div className={styles.skillsWrapper}>
          <li>React &#x2022;</li>
          <li>&nbsp;React Native &#x2022;</li>
          <li>&nbsp;Node.js &#x2022;</li>
          <li>&nbsp;Next.js</li>
        </div>
      </ul>
    </section>
  );
}

export default Skills;
