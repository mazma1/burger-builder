import React from 'react';

import BuildControl from 'components/burger/build-controls/build-control/BuildControl';
import styles from 'components/burger/build-controls/BuildControls.module.css';


const controls = [
  { label: 'Meat', type: 'mear' },
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
];

const BuildControls = () => (
  <div className={styles.container}>
    { controls.map( control => (
      <BuildControl 
        key={control.label}
        type={control.type}
        ingredient={control.label} 
      />
    ))}
  </div>
);

export default BuildControls;
