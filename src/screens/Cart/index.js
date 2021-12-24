import React, {useContext} from 'react';
import CartComponent from './../../components/Cart/index';
import {GlobalContext} from './../../context/Provider';
import axios from '../../constants/axiosInstance/index';
import {ToastAndroid} from 'react-native';
import updateItemCart from '../../context/actions/home/updateItemCart';

const Cart = () => {
  const {
    productsDispatch,
    productsState: {
      getCart: {cartData, cartLoading},
    },
  } = useContext(GlobalContext);
  const {
    authState: {id},
  } = useContext(GlobalContext);

  const removeItemInCart = id => {
    console.log('id', id);
    axios
      .delete('/cart/item/' + id)
      .then(response => {
        // handle success
        console.log('responseRemove:', response.data.msg);
        ToastAndroid.show(response.data.msg.toString(), ToastAndroid.SHORT);

        // dispatch({type: ADD_CART_SUCCESS, payload: response.data});
      })
      .catch(error => {
        // handle errornse);
        // dispatch({type: ADD_CART_FAIL, payload: error.response.data});
      });
  };
  const updateItemInCart = (cartItemID, quantity) => {
    console.log('id', cartItemID + ';>' + quantity);
    updateItemCart(cartItemID, quantity);
  };

  return (
    <CartComponent
      cartData={cartData}
      cartLoading={cartLoading}
      productsDispatch={productsDispatch}
      removeItemInCart={removeItemInCart}
      updateItemInCart={updateItemInCart}
      isLogged={id}
    />
  );
};

export default Cart;
