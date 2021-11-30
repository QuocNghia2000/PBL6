import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

const RadioButton = ({options, onChangeSelected, selected}) => {
  const getBorderColor = index => {
    if (selected === index) {
      return colors.primary;
    }
  };
  return (
    <View style={styles.bgRadioGroup}>
      {options.map((opt, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onChangeSelected(opt, index)}>
          <Text
            style={[styles.bgRadioBtn, {borderColor: getBorderColor(index)}]}>
            {opt}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  bgRadioBtn: {
    margin: 20,
    textAlign: 'center',
    width: 85,
    padding: 10,
    fontSize: 17,
    borderRadius: 5,
    borderWidth: 1,
    alignSelf: 'center',
  },
  bgRadioGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default RadioButton;
