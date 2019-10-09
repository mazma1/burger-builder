import React, { Fragment } from 'react';
import Button from 'components/ui/button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientKey => (
      <li key={ingredientKey}>
        <span style={{ textTransform: 'capitalize' }}>
          {ingredientKey} </span>: {props.ingredients[ingredientKey]}
      </li>
    ));

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        { ingredientSummary }
      </ul>
      <p style={{ margin: 0}}><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p style={{ margin: 0}}>Continue to Checkout?</p>
      <Button type='danger' handleClick={props.cancelPurchase}>CANCEL</Button>
      <Button type='success' handleClick={props.continuePurchase}>CONTINUE</Button>
    </Fragment>
  )
};

export default OrderSummary;
