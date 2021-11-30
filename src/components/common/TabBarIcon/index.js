import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabBarIcon = ({name, color, size}) => {
  return <Ionicons name={name} color={color} size={size} />;
};

export default TabBarIcon;
