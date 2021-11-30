import React from 'react';
import SplashComponent from './../../components/Splash/index';
import {useNavigation} from '@react-navigation/native';
import {BOTTOM_NAVIGATOR} from '../../constants/routeNames';

const SplashScreen = () => {
  const navigate = useNavigation();
  setTimeout(() => {
    navigate.replace(BOTTOM_NAVIGATOR);
  }, 2000);
  return <SplashComponent />;
};

export default SplashScreen;
