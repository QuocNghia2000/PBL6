import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 10,
  },
  registerbtn: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  bgRegister: {
    height: 42,
    backgroundColor: 'green',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 15,
  },
  bgLoginWith: {
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 5,
    borderRadius: 4,
    flexDirection: 'row',
    backgroundColor: '#6ccfff',
    alignItems: 'center',
  },
  iconLoginWith: {
    height: 25,
    width: 25,
    alignSelf: 'center',
  },
  textLoginWith: {
    width: '100%',
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
  bgBtnFb: {
    marginTop: 80,
    width: '50%',
    alignSelf: 'center',
  },
  error: {
    color: colors.red,
    textAlign: 'center',
  },
});
