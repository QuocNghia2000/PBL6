import {
  ADD_CART_LOADING,
  ADD_CART_FAIL,
  ADD_CART_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';

export default ({cartID, productID, quantity}) =>
  dispatch => {
    dispatch({
      type: ADD_CART_LOADING,
    });
    axios
      .post('/cart/item/add', {
        cartId: cartID,
        productId: productID,
        quantity: quantity,
      })
      .then(response => {
        // handle success
        //console.log('response:', response.data);
        dispatch({type: ADD_CART_SUCCESS, payload: response.data});
      })
      .catch(error => {
        // handle errornse);
        dispatch({type: ADD_CART_FAIL, payload: error.response.data});
      });
  };
