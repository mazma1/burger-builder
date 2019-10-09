import React, { Fragment } from 'react';
import Backdrop from 'components/ui/backdrop/Backdrop';

import styles from 'components/ui/modal/Modal.module.css';

const Modal = (props) => (
  <Fragment>
    <Backdrop show={props.show} dismissModal={props.dismissModal}/>

    <div 
      className={styles.modal} 
      style={{ 
        transorm: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}>
      {props.children}
    </div>
  </Fragment>
);

export default Modal;
