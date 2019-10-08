import React, { Component, Fragment } from 'react';

import Burger from 'components/burger/Burger';
import BuildControls from 'components/burger/build-controls/BuildControls';


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 5,
    purchasable: false,
  };

  updatePurschasableState = () => {
    this.setState( prevState => {
      const ingredients = { ...prevState.ingredients };
      const sum = Object.keys(ingredients)
      .map(ingredientKey => {
        return ingredients[ingredientKey];
      })
      .reduce((sum, ingredientCount) => {
        return sum + ingredientCount;
      }, 0);

      return { purchasable: sum > 0 }
    });
  }

  addIngredientHandler = (type) => {
    this.setState( prevState => { 
      const updatedCount = prevState.ingredients[type] + 1;
      const newPrice = prevState.totalPrice + INGREDIENT_PRICES[type];
      
      return {
        ingredients: {
          ...prevState.ingredients,
          [type]: updatedCount,
        },
        totalPrice: newPrice,
      };
    });
    this.updatePurschasableState();
  };

  removeIngredientHandler = (type) => {
    this.setState( prevState => { 
      const { ingredients, totalPrice } = prevState;

      if (ingredients[type] <= 0 ) return;

      const updatedCount = ingredients[type] - 1;
      const newPrice = totalPrice - INGREDIENT_PRICES[type];
      
      return {
        ingredients: {
          ...ingredients,
          [type]: updatedCount,
        },
        totalPrice: newPrice,
      };
    });
    this.updatePurschasableState();
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
