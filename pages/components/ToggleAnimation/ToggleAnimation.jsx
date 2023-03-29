import * as React from 'react';
import styles from './toggleAnimation.module.css';

const ToggleAnimation = ({ animationEnabled, onToggleAnimation}) => {
  return (
    <>
      <div
        className={styles.toggleItem}
        onClick={() => onToggleAnimation(true)}
      >
        <div
          className={styles.checkbox}
          style={{backgroundColor: animationEnabled ? '#fff' : 'transparent'}}
        />
        Animated
      </div>
      <div
        className={styles.toggleItem}
        onClick={() => onToggleAnimation(false)}
      >
        <div
          className={styles.checkbox}
          style={{backgroundColor: !animationEnabled ? '#fff' : 'transparent'}}
        />
        Minimalistic
      </div>
    </>
  );
}

export default ToggleAnimation;
