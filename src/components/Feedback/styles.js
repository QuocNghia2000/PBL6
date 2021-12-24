import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
export default StyleSheet.create({
  bg: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
  },
  txtTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  toolbar: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 5,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.primary,
  },
  textInput: {
    width: '100%',
    height: 150,
    fontSize: 18,
    backgroundColor: colors.light_gray,
    borderWidth: 0.5,
    paddingLeft: 15,
  },
  container: {
    flex: 1,
  },
  back: {
    marginLeft: 10,
    position: 'absolute',
    left: 10,
  },
  starIcon: {
    fontSize: 35,
    color: '#ff8d1c',
    marginLeft: 5,
  },
  bgStar: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bgSave: {
    width: 50,
    right: 15,
    position: 'absolute',
  },
  txtSave: {
    fontSize: 18,
    color: colors.red,
  },
  txtEror: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 10,
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
  containerProduct: {
    margin: 15,
    borderWidth: 1,
    borderColor: colors.light_gray,
    padding: 10,
    flexDirection: 'row',
  },
});
