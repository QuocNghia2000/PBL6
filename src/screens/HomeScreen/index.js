import React, {useContext, useEffect} from 'react';
import HomeScreenComponent from './../../components/HomeScreen/index';
import {GlobalContext} from './../../context/Provider';
import getProducts from '../../context/actions/home/getProductList';
import getCategories from '../../context/actions/category/getCategories';
import getShops from '../../context/actions/home/getShops';
import getCart from '../../context/actions/home/getCartList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getInfo from '../../context/actions/personal/getInfo';
import {decode as atob} from 'base-64';
import addItemCart from '../../context/actions/home/addCart';
import {ToastAndroid} from 'react-native';
import updateItemCart from '../../context/actions/home/updateItemCart';

const HomeScreen = () => {
  const getCartID = async () => {
    const cartID = await AsyncStorage.getItem('cartID');
    const token = await AsyncStorage.getItem('token');
    if (cartID !== null && token !== null) {
      //console.log('carrtID:', cartID);
      const id = JSON.parse(atob(token.toString().split('.')[1])).id;
      //console.log('token: ', id);
      getInfo(id)(personalDispatch);
      getCart(cartID)(productsDispatch);
    }
  };
  const addCart = async (productId, quantity) => {
    const cartID = await AsyncStorage.getItem('cartID');
    if (cartID !== null) {
      console.log('carrtID:', productId + ':/' + quantity);
      addItemCart(cartID, productId, quantity);
      ToastAndroid.show('Thêm vào giỏ thành công', ToastAndroid.SHORT);
    }
  };
  const updateItemInCart = (cartItemID, quantity) => {
    console.log('id', cartItemID + ';>' + quantity);
    updateItemCart(cartItemID, quantity);
  };
  const {
    productsDispatch,
    productsState: {
      getProducts: {data, loading},
      getShops: {shopData},
      getCart: {cartData},
    },
  } = useContext(GlobalContext);
  const {
    personalDispatch,
    personalState: {
      getInfo: {dataInfo},
    },
  } = useContext(GlobalContext);
  const {
    categoryDispatch,
    categoryState: {
      getCategories: {dataCategorites, loadingCategorites},
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    getProducts()(productsDispatch);
    getCategories()(categoryDispatch);
    getShops()(productsDispatch);
    getCartID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryDispatch, productsDispatch]);
  //console.log('data: ', cartData);
  //console.log('category: ', dataCategorites);
  // console.log('info: ', dataInfo);
  return (
    <HomeScreenComponent
      data={data}
      loading={loading}
      dataCategorites={dataCategorites}
      loadingCategorites={loadingCategorites}
      shopData={shopData}
      productsDispatch={productsDispatch}
      cartData={cartData}
      addCart={addCart}
      updateItemInCart={updateItemInCart}
    />
  );
};

export default HomeScreen;
