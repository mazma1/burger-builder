import React from 'react';
import classes from 'components/burger/Burger.module.css';

import BurgerIngredient from 'components/burger/ingredients/Ingredients';

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => (
      [...Array(props.ingredients[ingredient])].map((_, index) => (
        <BurgerIngredient key={`ingredient${index}`} type={ingredient} />
      ))
    ));


  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default Burger;
