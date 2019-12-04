import React from 'react';
// import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';

const OrderSummary = () => (
  <h2 className={styles.component}>
    <p>Total:<strong>$12,345</strong></p>
  </h2>
);

export default OrderSummary;
