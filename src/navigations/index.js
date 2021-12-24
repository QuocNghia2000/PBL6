import React, {useContext} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashNavigator from './SplashNavigator';
import {decode as atob} from 'base-64';
import {GET_TOKEN, GET_CART_SUCCESS} from './../constants/actionTypes/index';
import {AppState} from 'react-native';

const AppNavigation = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  const {authDispatch} = useContext(GlobalContext);
  const {
    productsDispatch,
    productsState: {
      getCart: {cartData},
    },
  } = useContext(GlobalContext);
  const appState = React.useRef(AppState.currentState);

  const saveCartToStorage = () => {
    cartData.forEach(element => {
      console.log('home:', element.product.name);
    });
    console.log('item in carrt: ', cartData);
    AsyncStorage.setItem('cartData', JSON.stringify(cartData));
  };
  const getInfoUserFromToken = async () => {
    const cartID = await AsyncStorage.getItem('cartID');
    const token = await AsyncStorage.getItem('token');
    const cartDATA = await AsyncStorage.getItem('cartData');
    if (cartID !== null && token !== null) {
      const id = JSON.parse(atob(token.toString().split('.')[1])).id;
      authDispatch({type: GET_TOKEN, payload: {id: id, cartId: cartID}});
    } else if (cartDATA !== null) {
      console.log('item in carrt: ', JSON.parse(cartDATA));
      productsDispatch({type: GET_CART_SUCCESS, payload: JSON.parse(cartDATA)});
    }
  };

  React.useEffect(() => {
    getInfoUserFromToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
      console.log('AppState', appState.current);
      if (appState.current.match(/inactive|background/)) {
        console.log('App has come to the foreground!');
        console.log('item in carrt: ', cartData);
        AsyncStorage.setItem('cartData', JSON.stringify(cartData));
        //saveCartToStorage();
      }
    });
    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      <SplashNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
