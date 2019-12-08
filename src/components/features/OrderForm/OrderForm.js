import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

import { Col} from 'react-flexbox-grid';

const OrderForm = props => (
  <Row>
    <Col xs={12}>
      <OrderSummary options={props.options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
};

export default OrderForm;
