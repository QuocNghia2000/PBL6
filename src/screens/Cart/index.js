import React, {useContext, useEffect} from 'react';
import CartComponent from './../../components/Cart/index';
import {GlobalContext} from './../../context/Provider';
import getCart from '../../context/actions/home/getCartList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
  const getCartID = async () => {
    const cartID = await AsyncStorage.getItem('cartID');
    if (cartID !== null) {
      getCart(cartID)(productsDispatch);
    }
  };
  const {
    productsDispatch,
    productsState: {
      getCart: {cartData, cartLoading},
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    getCartID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log('cart: ', cartData);
  return <CartComponent cartData={cartData} cartLoading={cartLoading} />;
};

export default Cart;
