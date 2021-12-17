import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const PersonalText = ({
  label,
  value,
  enable,
  onPress,
  editable,
  keyboardType,
  maxLength,
  onChangeText,
}) => {
  return (
    <TouchableOpacity style={styles.bg} disabled={false} onPress={onPress}>
      {label && <Text style={[styles.text, {flex: 1}]}>{label}</Text>}
      {value && (
        <TextInput
          style={[styles.text, {marginRight: 20}]}
          editable={editable}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={value}
          maxLength={maxLength}></TextInput>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bg: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
});

export default PersonalText;
