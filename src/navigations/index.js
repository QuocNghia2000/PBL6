import React, {useContext} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
import BottomNavigator from './BottomNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashNavigator from './SplashNavigator';

const AppNavigation = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // We have data!!
        console.log('tokenID', value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  //retrieveData();

  // console.log('isLoggedIn :>>', isLoggedIn);

  return (
    <NavigationContainer theme={MyTheme}>
      {/* {isLoggedIn ? <BottomNavigator /> : <AuthNavigator />} */}
      <SplashNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
