import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TabBarIcon = ({name, color, size, type}) => {
  return type ? (
    <MaterialIcons name={name} color={color} size={size} />
  ) : (
    <Ionicons name={name} color={color} size={size} />
  );
};

export default TabBarIcon;
