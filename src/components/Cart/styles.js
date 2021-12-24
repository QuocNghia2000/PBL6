import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/theme/colors';

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
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
  container: {flex: 1},
  back: {
    marginLeft: 10,
    position: 'absolute',
    left: 10,
  },
  checkboxAll: {
    marginLeft: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
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
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  textBuy: {
    fontSize: 15,
    color: colors.white,
    fontWeight: 'bold',
  },
  containerAll: {
    position: 'absolute',
    height: 60,
    left: 0,
    justifyContent: 'center',
    bottom: 10,
    width: windowWidth,
    backgroundColor: '#dadada',
  },
});
