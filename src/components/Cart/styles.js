import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  toolbar: {
    justifyContent: 'center',
    paddingVertical: 5,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.primary,
  },
  back: {
    marginLeft: 10,
    position: 'absolute',
    left: 10,
  },
  txtTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  positionCenter: {
    alignItems: 'center',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
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
    marginTop: 70,
    marginLeft: 10,
  },
  textBuy: {
    fontSize: 15,
    color: colors.white,
    fontWeight: 'bold',
  },
});
