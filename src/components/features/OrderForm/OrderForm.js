import React from 'react';
// import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

import { Col} from 'react-flexbox-grid';

const OrderForm = () => (
  <Row>
    <Col xs={12}>
      <OrderSummary />
    </Col>
  </Row>
);

export default OrderForm;
