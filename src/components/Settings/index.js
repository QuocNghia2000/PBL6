import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './../common/Button/index';
import {useNavigation} from '@react-navigation/native';
import {LOGIN, REGISTER} from '../../constants/routeNames';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsComponent = ({isLoggedIn}) => {
  //console.log(isLoggedIn);
  const {navigate} = useNavigation();

  const btnLogin = () => {
    navigate(LOGIN);
  };
  const btnSignUp = () => {
    navigate(REGISTER);
  };
  const btnLogout = () => {
    navigate(LOGIN);
    AsyncStorage.removeItem('token');
  };
  return (
    <View>
      {isLoggedIn ? (
        <View style={styles.bg}>
          <Button title="Đăng xuất" loginColor onPress={btnLogout} />
        </View>
      ) : (
        <View style={styles.bg}>
          <Button title="Đăng nhập" loginColor onPress={btnLogin} />
          <Button title="Đăng ký" signupColor onPress={btnSignUp} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
  },
});

export default SettingsComponent;
