import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

const Button = ({title, loginColor, signupColor, onPress}) => {
  const getBgColor = () => {
    if (loginColor) {
      return colors.primary;
    }
    if (signupColor) {
      return colors.green;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor(), borderWidth: 1}]}>
      {title && <Text style={styles.textInput}>{title}</Text>}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 42,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  textInput: {
    width: '100%',
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
});

export default Button;
