import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PersonalText = ({label, value, enable}) => {
  return (
    <TouchableOpacity style={styles.bg} disabled={false}>
      {label && <Text style={[styles.text, {flex: 1}]}>{label}</Text>}
      {value && <Text style={[styles.text, {marginRight: 20}]}>{value}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bg: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    padding: 10,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
});

export default PersonalText;
