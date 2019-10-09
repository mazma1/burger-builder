import React from 'react';

import styles from 'components/ui/backdrop/Backdrop.module.css';

const Backdrop = (props) => (
  props.show ? 
    <div className={styles.backdrop} onClick={props.dismissModal}></div> 
  : null
);

export default Backdrop;
