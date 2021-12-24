import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/theme/colors';
export default StyleSheet.create({
  container: {
    height: '100%',
  },
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
    justifyContent: 'center',
    paddingVertical: 5,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.primary,
  },
  bgBtn: {
    height: 60,
  },
  tabview: {
    height: '96%',
  },
  loading: {
    alignItems: 'center',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
});
