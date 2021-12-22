import {
  ADD_CART_LOADING,
  ADD_CART_FAIL,
  ADD_CART_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';

export default (cartID, productID, quantity) => {
  // dispatch({
  //   type: ADD_CART_LOADING,
  // });
  console.log('có vô add', cartID + '/' + productID + ':/' + quantity);
  axios
    .post('/cart/item/add', {
      cartId: cartID,
      productId: productID,
      quantity: parseInt(quantity),
    })
    .then(response => {
      // handle success
      console.log('responseAddcart:', response);
      // dispatch({type: ADD_CART_SUCCESS, payload: response.data});
    })
    .catch(error => {
      // handle errornse);
      // dispatch({type: ADD_CART_FAIL, payload: error.response.data});
    });
};
