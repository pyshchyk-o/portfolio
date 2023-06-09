import * as React from 'react';
import styles from './gradientSwitcher.module.css';
import Tooltip from '../Tooltip/Tooltip';

const borderColor = 'rgba(0,0,0, 0.5)';

const GradientSwitcher = ({ gradient, onSetGradient }) => {
  const gradientSelected = (gradientVal) => gradient === gradientVal;
  return (
    <div className={styles.gradientContainer}>

      <Tooltip tooltipText="Dark">
        <div
          style={{
            ...(gradientSelected('dark') ? { borderColor: borderColor } : {})
          }}
          onClick={() => onSetGradient('dark')}
          className={`${styles.gradientOption} ${styles.gradientDark}`}
        />
      </Tooltip>

      <Tooltip tooltipText="Pastel">
        <div
          style={{
            ...(gradientSelected('pastel') ? { borderColor: borderColor } : {})
          }}
          onClick={() => onSetGradient('pastel')}
          className={`${styles.gradientOption} ${styles.gradientPastel}`}
        />
      </Tooltip>

      <Tooltip tooltipText="Bright">
        <div
          style={{
            ...(gradientSelected('bright') ? { borderColor: borderColor } : {})
          }}
          onClick={() => onSetGradient('bright')}
          className={`${styles.gradientOption} ${styles.gradientBright}`}
        />
      </Tooltip>

      <Tooltip tooltipText="Ukraine">
        <div
          style={{
            ...(gradientSelected('ukraine') ? { borderColor: borderColor } : {})
          }}
          onClick={() => onSetGradient('ukraine')}
          className={`${styles.gradientOption} ${styles.gradientUkraine}`}
        />
      </Tooltip>

    </div>
  );
}

export default GradientSwitcher;
