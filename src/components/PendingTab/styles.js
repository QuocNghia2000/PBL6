import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  bgItemProduct: {
    flexDirection: 'row',
    height: 130,
    marginLeft: 10,
    paddingVertical: 15,
    alignContent: 'center',
    borderWidth: 0.8,
    borderColor: colors.green,
    padding: 5,
    marginBottom: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 10,
  },
  textName: {
    marginTop: 10,
    fontSize: 17,
    color: 'black',
    marginLeft: 15,
    width: 200,
  },
  bgRight: {
    marginLeft: 15,
    position: 'absolute',
    right: 5,
    top: 25,
  },
  textQty: {
    fontSize: 15,
    color: 'black',
    position: 'absolute',
    right: 10,
  },
  textPrice: {
    color: colors.red,
    fontSize: 16,
  },
  bgMoney: {
    marginTop: 50,
    marginRight: 5,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  btnBuy: {
    width: 90,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    position: 'absolute',
    right: 20,
    bottom: 5,
  },
  textBuy: {
    fontSize: 15,
    color: colors.white,
    fontWeight: 'bold',
  },
  itemOrder: {
    marginTop: 5,
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#e4e4e4',
  },
  txtTotal: {
    fontSize: 17,
    color: colors.red,
  },
  txtId: {
    color: 'black',
    marginLeft: 10,
    marginVertical: 10,
  },
  bgTotal: {
    marginLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
});
