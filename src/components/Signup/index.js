import React from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import Container from './../../components/common/Container/index';
import Input from './../../components/common/Input/index';
import RadioButton from './../../components/common/RadioButton/RadioGroup';
import DatePicker from './../../components/common/DatePicker/index';
import CustomeButton from './../../components/common/CustomButton/index';
import styles from './styles';
import logoImage from '../../assets/images/logo.png';
import {LOGIN} from './../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const RegisterComponent = ({form, errors, onChange, onSubmit}) => {
  const {navigate} = useNavigation();
  const [selected, setSelected] = React.useState();
  const [text, setText] = React.useState('Select your birthday');
  const options = ['Male', 'Female'];
  const onChangeDate = txt => {
    setText(txt);
    onChange({name: 'date', value: txt});
  };
  return (
    <Container>
      <Image
        width={70}
        height={70}
        source={logoImage}
        style={styles.logoImage}
      />
      {/* <Text> Create new account</Text> */}
      <Input
        placeholder="Enter your email"
        iconLeft="person-outline"
        keyboardType="email-address"
        maxLength={30}
        onChangeText={value => {
          onChange({name: 'username', value: value});
        }}
        error={errors.username}
      />
      <Input
        placeholder="Enter your fullname"
        iconLeft="text-snippet"
        maxLength={20}
        onChangeText={value => {
          onChange({name: 'fullname', value: value});
        }}
        error={errors.fullname}
      />
      <Input
        placeholder="Enter your password"
        iconEye
        secureTextEntry={true}
        iconLeft="lock-open"
        maxLength={16}
        onChangeText={value => {
          onChange({name: 'password', value: value});
        }}
        error={errors.password}
      />
      <Input
        placeholder="Confirm password"
        iconEye
        secureTextEntry={true}
        iconLeft="lock-open"
        onChangeText={value => {
          onChange({name: 'confirmpass', value: value});
        }}
        error={errors.confirmpass}
      />

      <Input
        placeholder="Enter your phone number"
        iconLeft="smartphone"
        keyboardType="numeric"
        maxLength={10}
        onChangeText={value => {
          onChange({name: 'phone', value: value});
        }}
        error={errors.phone}
      />
      <RadioButton
        selected={selected}
        options={options}
        onChangeSelected={(opt, index) => {
          setSelected(index);
          onChange({name: 'gender', value: opt ? opt : ''});
        }}
      />
      {/* <View style={styles.bgGroupDate}>
        <Text style={styles.textDate}>{text}</Text>
        <DatePicker onChangeDate={onChangeDate} />
      </View> */}

      {/* Ngayf sinh, gioi tinh */}
      <CustomeButton
        onSubmit={onSubmit}
        primary
        title="Register"
        loading={false}
        disable={true}
      />
      <TouchableOpacity
        style={styles.bgLogin}
        onPress={() => {
          navigate(LOGIN);
        }}>
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default RegisterComponent;
