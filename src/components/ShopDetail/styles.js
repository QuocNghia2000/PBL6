import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/theme/colors';

const space = 15;
export default StyleSheet.create({
  imageBg: {
    height: 330,
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  imageLogo: {
    height: 80,
    width: 80,
    marginTop: 10,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: colors.darkgrey,
  },
  txtNameShop: {
    fontSize: 25,
    color: 'white',
    marginLeft: 15,
    fontWeight: 'bold',
  },
  bgLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    bottom: 20,
  },
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
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
  txtTitle: {
    fontSize: 25,
    margin: 20,
    color: colors.primary,
  },
});
