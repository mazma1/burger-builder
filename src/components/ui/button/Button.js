import React from 'react';

import styles from 'components/ui/button/Button.module.css';

const Button = (props) => (
  <button 
    onClick={props.handleClick} 
    className={[styles.button, styles[props.type]].join(' ')}>{props.children}</button>
);

export default Button;
