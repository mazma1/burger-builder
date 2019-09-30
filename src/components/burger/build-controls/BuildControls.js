import React from 'react';

import BuildControl from 'components/burger/build-controls/build-control/BuildControl';
import styles from 'components/burger/build-controls/BuildControls.module.css';


const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
];

const BuildControls = (props) => (
  <div className={styles.container}>
    { controls.map( control => (
      <BuildControl 
        key={control.label}
        ingredient={control.label}
        disabled={props.disabled[control.type]}
        addIngredient={() => props.addIngredient(control.type)}
        removeIngredient={() => props.removeIngredient(control.type)}
      />
    ))}
  </div>
);

export default BuildControls;
