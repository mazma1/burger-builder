import React from 'react';

import styles from 'components/burger/build-controls/build-control/BuildControl.module.css';

const BuildControl = (props) => (
  <div className={styles['build-control']}>
    <div className={styles.label}>{props.ingredient}</div>
    <button className={styles.less}>Less</button>
    <button className={styles.more}>More</button>
  </div>
);

export default BuildControl;
