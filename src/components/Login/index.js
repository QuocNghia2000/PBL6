import React from 'react';
import {Image, TouchableOpacity, Text, View, StatusBar} from 'react-native';
import Container from './../../components/common/Container/index';
import Input from './../../components/common/Input/index';
import CustomeButton from './../../components/common/CustomButton/index';
import styles from './styles';
import logoImage from '../../assets/images/logo.png';
import iconGoogle from '../../assets/images/icon_google.png';
import {REGISTER, SPLASH} from './../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
//user:abc123555@gmail.com pass:1231232
const LoginComponent = ({form, errors, error, onChange, onSubmit, loading}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Image
        width={70}
        height={70}
        source={logoImage}
        style={styles.logoImage}
      />
      <Input
        placeholder="Enter your email"
        iconLeft="person-outline"
        onChangeText={value => {
          onChange({name: 'username', value: value});
        }}
        error={errors.username}
      />

      <Input
        placeholder="Enter your password"
        iconEye
        iconLeft="lock-open"
        onChangeText={value => {
          onChange({name: 'password', value: value});
        }}
        error={errors.password}
      />
      {error && <Text style={styles.error}>{error}</Text>}

      <CustomeButton
        onSubmit={onSubmit}
        primary
        title="Login"
        loading={loading}
        disable={true}
      />
      <TouchableOpacity
        style={styles.bgRegister}
        onPress={() => {
          navigate(REGISTER);
        }}>
        <Text style={styles.registerbtn}>Register</Text>
      </TouchableOpacity>

      <View style={styles.bgBtnFb}>
        <Icon.Button
          name="facebook"
          onPress={() => {
            console.log('FB');
          }}>
          Login with Facebook
        </Icon.Button>
      </View>

      <TouchableOpacity
        style={styles.bgLoginWith}
        onPress={() => {
          console.log('Google');
        }}>
        <Image
          width={30}
          height={30}
          source={iconGoogle}
          style={styles.iconLoginWith}
        />
        <Text style={styles.textLoginWith}> Login with Google</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default LoginComponent;
