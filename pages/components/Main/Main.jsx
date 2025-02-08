import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import styles from './main.module.css';

const iconSize = '14px';

const Main = () => {
  return (
    <section className={styles.homeContainer}>
      <>
        <h2 className={styles.mainTitle}>Olha Pyshchyk</h2>
        <p>Software Engineer</p>
        <div className={styles.links}>
          <a
            className={styles.mediaLink}
            href="https://github.com/pyshchyk-o"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                color: 'white',
                width: iconSize,
                height: iconSize,
                marginRight: '6px',
              }}
            />{' '}
            <span>Github</span>
          </a>
          <a
            className={styles.mediaLink}
            href="https://www.linkedin.com/in/opyshchyk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                color: 'white',
                width: iconSize,
                height: iconSize,
                marginRight: '6px',
              }}
            />{' '}
            <span>LinkedIn</span>
          </a>
          <a
            className={styles.mediaLink}
            href="https://twitter.com/OlhaPyshchyk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              style={{
                color: 'white',
                width: iconSize,
                height: iconSize,
                marginRight: '6px',
              }}
            />{' '}
            <span>Twitter</span>
          </a>
        </div>
      </>
    </section>
  );
};

export default Main;
