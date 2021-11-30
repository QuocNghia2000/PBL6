import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  bgItemProduct: {
    flexDirection: 'row',
    marginLeft: 10,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    alignContent: 'center',
  },
  itemImage: {
    width: 120,
    height: 120,
  },
  imageShop: {
    width: 100,
    height: 70,
  },
  itemShop: {
    width: 170,
    height: 200,
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  bgRight: {
    marginLeft: 15,
    width: 150,
  },
  textPrice: {
    color: colors.red,
    marginTop: 40,
    fontSize: 16,
  },
  btnBuy: {
    width: 90,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  textBuy: {
    fontSize: 15,
    color: colors.white,
    fontWeight: 'bold',
  },
  bgItemShop: {
    marginVertical: 15,
  },
  titleShop: {
    fontSize: 23,
    color: 'blue',
    marginLeft: 15,
  },
  txtDetail: {
    fontSize: 15,

    color: colors.red,
  },
  pressable: {
    position: 'absolute',
    right: 15,
    alignSelf: 'center',
  },
  bgTitle: {
    justifyContent: 'center',
  },
  bgItemCategory: {
    padding: 5,
  },
  txtCategory: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  imageCategory: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  nameShop: {
    borderWidth: 1,
    borderColor: colors.darkgrey,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  cartIcon: {
    fontSize: 30,
    color: colors.darkgray,
    position: 'absolute',
    right: 50,
    top: 20,
  },
  container: {
    flex: 1,
  },
});
