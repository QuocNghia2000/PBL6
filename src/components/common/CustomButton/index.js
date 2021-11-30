import React from 'react';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const CustomeButton = ({
  title,
  primary,
  sencondary,
  loading,
  disable,
  onSubmit,
  ...props
}) => {
  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (disable) {
      return colors.darkgrey;
    }
    if (sencondary) {
      return colors.sencondary;
    }
  };
  return (
    <TouchableOpacity
      onPress={onSubmit}
      disable={disable}
      style={[styles.wrapper, {backgroundColor: getBgColor(), borderWidth: 1}]}>
      <View style={styles.bgButton}>
        {loading && <ActivityIndicator color={colors.red} />}
        {title && (
          <Text
            style={[styles.textInput, {color: disable ? 'white' : 'black'}]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomeButton;
