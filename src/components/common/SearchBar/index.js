import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../assets/theme/colors';

const SearchBar = ({onPress, goBack, style}) => {
  return (
    <View style={[styles.bgToolbarSearch, style]}>
      {goBack && (
        <Ionicons name="arrow-back" style={styles.iconBack} onPress={goBack} />
      )}
      <TouchableOpacity style={styles.shapeSearch} onPress={onPress}>
        <Ionicons name="search" style={styles.icon} />
        <TextInput
          placeholder="SeaFood"
          style={styles.txtSearch}
          onFocus={onPress}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    marginLeft: 10,
    color: colors.darkgrey,
  },
  shapeSearch: {
    flexDirection: 'row',
    borderRadius: 20,
    height: 43,
    borderWidth: 1,
    borderColor: colors.darkgrey,
    marginHorizontal: 10,
    backgroundColor: colors.light_gray,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  txtSearch: {
    fontSize: 15,
    flex: 1,
  },
  bgToolbarSearch: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  iconBack: {
    fontSize: 30,
    marginLeft: 10,
  },
});

export default SearchBar;
