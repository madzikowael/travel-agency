import {connect} from 'react-redux';
import OrderFormContainer from './OrderForm';
import {getOrderOptions, getOrder} from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  getOrderOptions: getOrder(state),

});

const mapDispatchToProps = dispatch => ({
  options: getOrder => dispatch(getOrderOptions(getOrder)),

});

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormContainer);
