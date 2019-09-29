import React, { Component, Fragment } from 'react';

import Burger from 'components/burger/Burger';

class BurgerBuilder extends Component {
  state = {  }

  render() {
    return (
      <Fragment>
        <Burger/>
        <div>Build Controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
