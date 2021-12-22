/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import AppNavigation from './src/navigations';
import GlobalProvider from './src/context/Provider';
import {useAppState} from '@react-native-community/hooks';
import {AppState} from 'react-native';

const App = () => {
  // const [state, setState] = React.useState({appState: AppState.currentState});

  // const componentDidMount = () => {
  //   AppState.addEventListener('change', handleAppStateChange());
  // };

  // const componentWillUnmount = () => {
  //   AppState.removeEventListener('change', handleAppStateChange());
  // };

  // const handleAppStateChange = nextAppState => {
  //   console.log('value:', state.appState);
  //   // if (
  //   //   state.appState.match(/inactive|background/) &&
  //   //   nextAppState === 'active'
  //   // ) {
  //   //   console.log('App has come to the foreground!');
  //   // }
  //   setState({appState: nextAppState});
  // };
  // componentDidMount();
  // console.log('state:', state);
  return (
    <GlobalProvider>
      <AppNavigation />
    </GlobalProvider>
  );
};

export default App;
