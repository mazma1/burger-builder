import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/burger/ingredients/Ingredients.module.css';

const Ingredients = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={styles['bread-bottom']}></div>;
      break;

    case "bread-top":
      ingredient = (
        <div className={styles['bread-top']}>
          <div className={styles.seeds1}></div>
          <div className={styles.seeds2}></div>
        </div>
      );
      break;

    case "meat":
      ingredient = <div className={styles.meat}></div>;
      break;

    case "cheese":
      ingredient = <div className={styles.cheese}></div>;
      break;
    
    case "salad":
      ingredient = <div className={styles.salad}></div>;
      break;

    case "bacon":
      ingredient = <div className={styles.bacon}></div>;
      break;

    default:
      ingredient = null;
      break;
  };

  return ingredient;
};

Ingredients.propTypes = {
  type: PropTypes.string.isRequired,
};

Ingredients.defaultProps = {
  type: '',
};

export default Ingredients;
