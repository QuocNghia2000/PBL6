import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import convertPrice from '../../constants/Reused/index';
import {PRODUCT_DETAIL, ORDER} from './../../constants/routeNames';
import QuantityComponent from './../common/Quantity/index';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QTY,
} from './../../constants/actionTypes/index';
import CheckBox from '@react-native-community/checkbox';

const CartComponent = ({
  cartData,
  cartLoading,
  productsDispatch,
  removeItemInCart,
  updateItemInCart,
}) => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = React.useState(false);
  const [isVisibleDel, setVisibleDel] = React.useState(false);

  const [checked, setChecked] = React.useState({
    checked: Array(cartData.length).fill(false),
  });
  const checkBox = index => {
    let checkedCopy = checked;
    checkedCopy[index] = checkedCopy[index] ? false : true;
    setChecked({...checked, checked: checkedCopy});
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.positionCenter}>
        <Text>No items to show</Text>
      </View>
    );
  };

  const removeItemFromCart = product => {
    productsDispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
    setVisibleDel(!isVisibleDel);
  };

  const plusCartQty = (qty, productID, cartItemID) => {
    productsDispatch({
      type: UPDATE_CART_QTY,
      payload: {id: productID, qty: ++qty},
    });
    updateItemInCart(cartItemID, qty);
  };
  const minusCartQty = (qty, productID, cartItemID) => {
    productsDispatch({
      type: UPDATE_CART_QTY,
      payload: {id: productID, qty: --qty},
    });
    updateItemInCart(cartItemID, qty);
  };

  const renderItem = ({item, index}) => {
    //console.log('item :>>', item.name);
    const {image} = item.product;
    return (
      <TouchableOpacity
        style={styles.bgItemProduct}
        onPress={() => {
          navigation.navigate(PRODUCT_DETAIL, {
            data: item.product,
          });
        }}
        onLongPress={() => {
          setVisibleDel(!isVisibleDel);
        }}>
        <CheckBox
          value={checked[index]}
          onValueChange={() => checkBox(index)}
          style={styles.checkbox}
        />
        {image && <Image source={{uri: image}} style={styles.itemImage} />}

        <View style={styles.bgRight}>
          <Text style={styles.textName}>{item.product.name}</Text>
          <Text style={styles.textPrice}>
            {convertPrice(item?.product?.price.toString())} đ
          </Text>
          <QuantityComponent
            qty={item.quantity}
            removeItemFromCart={() => {
              removeItemInCart(item._id);
              removeItemFromCart(item.product);
            }}
            plusCartQty={() => {
              plusCartQty(item.quantity, item.product._id, item._id);
            }}
            minusCartQty={() => {
              minusCartQty(item.quantity, item.product._id, item._id);
            }}
          />
        </View>
        {isVisibleDel && (
          <MaterialIcons
            name="delete-forever"
            size={30}
            color={'red'}
            style={styles.checkbox}
            onPress={() => {
              Alert.alert('Xóa', 'Bạn có muốn xóa sản phẩm này ra khỏi giỏ?', [
                {
                  text: 'Không',
                  onPress: () => setVisibleDel(!isVisibleDel),
                },
                {
                  text: 'OK',
                  onPress: () => {
                    console.log('OK Pressed');
                    removeItemInCart(item._id);
                    removeItemFromCart(item.product);
                  },
                },
              ]);
            }}
          />
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        {/* <Ionicons
          name="arrow-back-outline"
          color="black"
          size={30}
          style={styles.back}
        /> */}
        <Text style={styles.txtTitle}>Giỏ hàng</Text>
      </View>
      {cartLoading && (
        <View>
          <ActivityIndicator
            style={styles.positionCenter}
            size="large"
            color="grey"
          />
        </View>
      )}
      <View style={styles.containerAll}>
        <CheckBox
          value={isSelected}
          onValueChange={() => {
            for (let index = 0; index < cartData.length; index++) {
              checkBox(index);
            }
            setSelection(!isSelected);
          }}
          style={styles.checkboxAll}
        />
        <TouchableOpacity
          style={styles.btnBuy}
          onPress={() => {
            // cartData
            //   .filter(function (eachElem, index) {
            //     return checked[index] === true;
            //   })
            //   .forEach(element => {
            //     console.log('item:', element);
            //   });
            navigation.navigate(ORDER, {
              data: cartData.filter(function (eachElem, index) {
                return checked[index] === true;
              }),
            });
          }}>
          <Text style={styles.textBuy}>Mua hàng</Text>
        </TouchableOpacity>
      </View>
      {!cartLoading && (
        <FlatList
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          data={cartData}
          ListEmptyComponent={ListEmptyComponent}
          // horizontal={true}
        />
      )}
    </View>
  );
};

export default CartComponent;
