import React, {useContext, useEffect} from 'react';
import HomeScreenComponent from './../../components/HomeScreen/index';
import {GlobalContext} from './../../context/Provider';
import getProducts from '../../context/actions/home/getProductList';
import getCategories from '../../context/actions/category/getCategories';
import getShops from '../../context/actions/home/getShops';
import getCart from '../../context/actions/home/getCartList';
import getInfo from '../../context/actions/personal/getInfo';
import addItemCart from '../../context/actions/home/addCart';
import {ToastAndroid} from 'react-native';
import updateItemCart from '../../context/actions/home/updateItemCart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {decode as atob} from 'base-64';

const HomeScreen = () => {
  const [isLogged, setLoggedIn] = React.useState(false);

  const {
    productsDispatch,
    productsState: {
      getProducts: {data, loading},
      getShops: {shopData},
      getCart: {cartData},
    },
  } = useContext(GlobalContext);

  // const {
  //   authState: {id, cartId},
  // } = useContext(GlobalContext);
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

  const getCartAndInfo = async () => {
    const cartId = await AsyncStorage.getItem('cartID');
    const token = await AsyncStorage.getItem('token');
    if (cartId !== null && token !== null) {
      const id = JSON.parse(atob(token.toString().split('.')[1])).id;
      console.log('id:', cartId + ':::' + id);

      setLoggedIn(true);
      getInfo(id)(personalDispatch);
      getCart(cartId)(productsDispatch);
    }
  };
  const addCart = async (productId, quantity) => {
    const cartId = await AsyncStorage.getItem('cartID');

    if (cartId !== null) {
      // console.log('carrtID:', productId + ':/' + quantity);
      addItemCart(cartId, productId, quantity);
      ToastAndroid.show('Thêm vào giỏ thành công', ToastAndroid.SHORT);
    }
  };
  const updateItemInCart = (cartItemID, quantity) => {
    console.log('id', cartItemID + ';>' + quantity);
    updateItemCart(cartItemID, quantity);
  };

  useEffect(() => {
    getProducts()(productsDispatch);
    getCategories()(categoryDispatch);
    getShops()(productsDispatch);
    getCartAndInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryDispatch, productsDispatch]);
  // console.log('product:', data);
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
      isLogged={isLogged}
    />
  );
};

export default HomeScreen;
