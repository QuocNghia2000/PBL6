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
  const {
    authDispatch,
    authState: {id},
  } = useContext(GlobalContext);
  const {
    productsDispatch,
    productsState: {
      getCart: {cartData},
    },
  } = useContext(GlobalContext);
  const appState = React.useRef(AppState.currentState);

  const getInfoUserFromToken = async () => {
    const cartID = await AsyncStorage.getItem('cartID');
    const token = await AsyncStorage.getItem('token');
    const cartDATA = await AsyncStorage.getItem('cartData');
    if (cartID !== null && token !== null) {
      AsyncStorage.removeItem('cartData');
      const userid = JSON.parse(atob(token.toString().split('.')[1])).id;
      console.log('id', cartID + ':::' + userid);
      authDispatch({type: GET_TOKEN, payload: {id: userid, cartId: cartID}});
    } else if (cartDATA !== null && id === null) {
      console.log('k có tài khoản');
      JSON.parse(cartDATA).forEach(element => {
        console.log('item in carrtIN: ', element.product.name);
      });
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
        cartData.forEach(element => {
          console.log('item in carrtOUT: ', element.product.name);
        });
        if (id === null) {
          AsyncStorage.setItem('cartData', JSON.stringify(cartData));
        }
      }
    });
    return () => {
      subscription.remove();
    };
  }, [cartData, id]);

  return (
    <NavigationContainer theme={MyTheme}>
      <SplashNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
