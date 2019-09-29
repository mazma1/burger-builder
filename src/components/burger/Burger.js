import React from 'react';
import classes from 'components/burger/Burger.module.css';

import BurgerIngredient from 'components/burger/ingredients/Ingredients';

const Burger = (props) => {
  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="cheese"/>
      <BurgerIngredient type="meat"/>
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default Burger;
