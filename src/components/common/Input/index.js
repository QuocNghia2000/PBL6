import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Input = ({
  style,
  onChangeText,
  value,
  keyboardType,
  iconLeft,
  iconEye,
  placeholder,
  maxLength,
  error,
}) => {
  const [focused, setFocused] = React.useState(false);
  const [show, setShow] = React.useState(true);

  const getBorderColor = () => {
    if (focused) {
      return colors.primary;
    }

    if (error) {
      return colors.red;
    } else {
      return colors.grey;
    }
  };

  const setDefaultSecurity = () => {
    if (iconEye) {
      return show;
    } else {
      false;
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={[styles.wrapper, {borderColor: getBorderColor()}]}>
        {iconLeft && (
          <MaterialIcons
            name={iconLeft}
            style={[styles.styleIcon, {color: getBorderColor()}]}
          />
        )}

        <TextInput
          style={[styles.textInput, style]}
          secureTextEntry={setDefaultSecurity()}
          onChangeText={onChangeText}
          placeholder={placeholder}
          maxLength={maxLength}
          keyboardType={keyboardType}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
        <TouchableOpacity
          style={styles.bgRegister}
          onPress={() => {
            setShow(!show);
          }}>
          {iconEye && !show && (
            <Ionicons name="eye-outline" style={styles.styleIcon} />
          )}
          {iconEye && show && (
            <Ionicons name="eye-off-outline" style={styles.styleIcon} />
          )}
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
