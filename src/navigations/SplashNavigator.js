import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BOTTOM_NAVIGATOR,
  SPLASH,
  AUTH_NAVIGATOR,
  PRODUCT_DETAIL,
  LOGIN,
  REGISTER,
  SHOP_DETAIL,
  CATEGORY_DETAIL,
  ORDER,
} from '../constants/routeNames';
import SplashScreen from './../screens/Splash/index';
import BottomNavigator from './BottomNavigator';
import AuthNavigator from './AuthNavigator';
import ProductDetail from './../screens/ProductDetail/index';
import Login from './../screens/Login/index';
import Register from './../screens/Register/index';
import ShopDetail from './../screens/ShopDetail/index';
import CategoryDetail from './../screens/CategoryDetail/index';
import OrderScreen from './../screens/Order/index';
import {FEEDBACK} from './../constants/routeNames';
import FeedbackScreen from './../screens/Feedback/index';

const SplashNavigator = () => {
  const SplashStack = createNativeStackNavigator();
  return (
    <SplashStack.Navigator
      initialRouteName={SPLASH}
      screenOptions={{
        headerShown: false,
      }}>
      <SplashStack.Screen name={SPLASH} component={SplashScreen} />
      <SplashStack.Screen name={BOTTOM_NAVIGATOR} component={BottomNavigator} />
      <SplashStack.Screen name={AUTH_NAVIGATOR} component={AuthNavigator} />
      <SplashStack.Screen name={PRODUCT_DETAIL} component={ProductDetail} />
      <SplashStack.Screen name={LOGIN} component={Login} />
      <SplashStack.Screen name={REGISTER} component={Register} />
      <SplashStack.Screen name={SHOP_DETAIL} component={ShopDetail} />
      <SplashStack.Screen name={CATEGORY_DETAIL} component={CategoryDetail} />
      <SplashStack.Screen name={ORDER} component={OrderScreen} />
      <SplashStack.Screen name={FEEDBACK} component={FeedbackScreen} />
    </SplashStack.Navigator>
  );
};

export default SplashNavigator;
