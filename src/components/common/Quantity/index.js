import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const QuantityComponent = () => {
  const [txtCount, setTxtCount] = React.useState('1');
  const onChangeText = type => {
    let count;
    if (type === 'plus') {
      count = parseInt(txtCount) + 1;
      if (count <= 10) {
        setTxtCount(count);
      } else {
        alert('Chỉ được mua tối đa 10 sản phẩm!');
      }
    } else {
      count = parseInt(txtCount) - 1;
      if (count > 0) {
        setTxtCount(count);
      }
    }
  };
  return (
    <View style={styles.width}>
      <MaterialCommunityIcons
        name="minus"
        size={20}
        style={styles.padding}
        onPress={() => {
          onChangeText('minus');
        }}
      />
      <Text style={styles.txtCount}>{txtCount}</Text>
      <MaterialCommunityIcons
        name="plus"
        size={20}
        style={styles.padding}
        onPress={() => {
          onChangeText('plus');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  width: {
    marginTop: 10,
    width: 80,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtCount: {
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
    borderLeftWidth: 1,
    borderColor: 'grey',
    borderRightWidth: 1,
  },
  padding: {
    paddingHorizontal: 2,
  },
});

export default QuantityComponent;
