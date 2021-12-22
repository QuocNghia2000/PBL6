import React, {useContext, useEffect} from 'react';
import CartComponent from './../../components/Cart/index';
import {GlobalContext} from './../../context/Provider';
import getCart from '../../context/actions/home/getCartList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../constants/axiosInstance/index';
import {ToastAndroid} from 'react-native';
import updateItemCart from '../../context/actions/home/updateItemCart';

const Cart = () => {
  const getCartID = async () => {
    const cartID = await AsyncStorage.getItem('cartID');
    if (cartID !== null) {
      //console.log('carrtID:', cartID);
      getCart(cartID)(productsDispatch);
    }
  };

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

  const {
    productsDispatch,
    productsState: {
      getCart: {cartData, cartLoading},
    },
  } = useContext(GlobalContext);
  // useEffect(() => {
  //   getCartID();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // console.log('cart: ', cartData);
  return (
    <CartComponent
      cartData={cartData}
      cartLoading={cartLoading}
      productsDispatch={productsDispatch}
      removeItemInCart={removeItemInCart}
      updateItemInCart={updateItemInCart}
    />
  );
};

export default Cart;
