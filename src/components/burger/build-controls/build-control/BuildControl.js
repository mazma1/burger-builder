import React from 'react';

import styles from 'components/burger/build-controls/build-control/BuildControl.module.css';

const BuildControl = (props) => (
  <div className={styles['build-control']}>
    <div className={styles.label}>{props.ingredient}</div>

    <button 
      disabled={props.disabled}
      className={styles.less} 
      onClick={props.removeIngredient}> Less </button>

    <button 
      className={styles.more} 
      onClick={props.addIngredient}> More </button>
  </div>
);

export default BuildControl;
