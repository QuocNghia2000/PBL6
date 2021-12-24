import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

const space = 15;
export default StyleSheet.create({
  image: {
    height: 330,
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
  },
  imageShop: {
    height: 80,
    width: 80,
    marginTop: 10,
    borderRadius: 70,
  },
  txtName: {
    paddingHorizontal: space,
    fontSize: 17,
    paddingVertical: 15,
    color: 'black',
  },
  txtPrice: {
    paddingHorizontal: space,
    fontSize: 18,
    color: colors.red,
  },
  txtTitleDes: {
    fontSize: 18,
    color: 'black',
  },
  txtQty: {fontSize: 18, color: 'black', margin: 10},
  txtTitleContainer: {
    paddingVertical: 10,
    paddingHorizontal: space,
    borderBottomWidth: 0.7,
    borderColor: colors.darkgrey,
    flexDirection: 'row',
  },
  txtDes: {
    paddingHorizontal: space,
    paddingVertical: 10,
    fontSize: 17,
  },
  bgNameShop: {
    marginLeft: 15,
  },
  bgShop: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: colors.red,
    alignItems: 'center',
    paddingVertical: 5,
  },
  txtNameShop: {
    fontSize: 15,
  },
  txtAddress: {
    fontSize: 13,
    marginLeft: 5,
  },
  bgAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  txtGoto: {color: 'red'},
  btnGotoShop: {
    position: 'absolute',
    right: 20,

    borderColor: 'red',
    borderWidth: 1,
    padding: 5,
  },
  bgItemFb: {
    flexDirection: 'row',
    alignContent: 'center',
    margin: 10,
  },
  userIcon: {
    fontSize: 25,
  },
  textName: {
    fontSize: 15,
  },
  containerFb: {
    marginLeft: 10,
  },
});
