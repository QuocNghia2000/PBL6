import React from 'react';
import SettingsComponent from './../../components/Settings/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const [isData, setData] = React.useState(false);
  const isLoggedIn = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      setData(true);
    }
  };
  React.useEffect(() => {
    isLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <SettingsComponent isLoggedIn={isData} />;
};

export default Settings;
