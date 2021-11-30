import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME_SCREEN, PRODUCT_DETAIL, SEARCH} from '../constants/routeNames';
import HomeScreen from './../screens/HomeScreen/index';
import SearchScreen from './../screens/SearchScreen/index';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <HomeStack.Screen name={SEARCH} component={SearchScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
