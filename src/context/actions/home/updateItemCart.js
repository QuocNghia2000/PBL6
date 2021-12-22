import axios from '../../../constants/axiosInstance/index';

export default (cartItemID, quantity) => {
  // dispatch({
  //   type: ADD_CART_LOADING,
  // });
  console.log('có vô add', cartItemID + ':/' + quantity);
  axios
    .put('/cart/item/' + cartItemID, {
      quantity: parseInt(quantity),
    })
    .then(response => {
      // handle success
      console.log('responseUpdatecart:', response.data);
      // dispatch({type: ADD_CART_SUCCESS, payload: response.data});
    })
    .catch(error => {
      // handle errornse);
      // dispatch({type: ADD_CART_FAIL, payload: error.response.data});
    });
};
