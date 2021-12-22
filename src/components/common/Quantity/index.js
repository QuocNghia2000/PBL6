import React from 'react';
import {View, Text, StyleSheet, Alert, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const QuantityComponent = ({
  qty,
  removeItemFromCart,
  plusCartQty,
  minusCartQty,
}) => {
  const onChangeQty = type => {
    console.log('qty:', qty);
    let count;
    if (type === 'plus') {
      count = parseInt(qty) + 1;
      if (count <= 10) {
        plusCartQty();
      } else {
        alert('Chỉ được mua tối đa 10 sản phẩm!');
      }
    } else {
      count = parseInt(qty) - 1;
      if (count > 0) {
        minusCartQty();
      } else {
        Alert.alert('Xóa', 'Bạn có muốn xóa sản phẩm này ra khỏi giỏ?', [
          {
            text: 'Không',
            onPress: () => console.log('Cancel Pressed'),
          },
          {
            text: 'OK',
            onPress: () => {
              console.log('OK Pressed');
              removeItemFromCart();
            },
          },
        ]);
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
          onChangeQty('minus');
        }}
      />
      <Text style={styles.txtCount}>{qty}</Text>
      <MaterialCommunityIcons
        name="plus"
        size={20}
        style={styles.padding}
        onPress={() => {
          onChangeQty('plus');
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
