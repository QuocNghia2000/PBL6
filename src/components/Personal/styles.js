import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  bgAvatar: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  distance: {
    height: 30,
    backgroundColor: colors.light_gray,
    borderTopWidth: 0.5,
  },
  bgBtnSave: {
    paddingHorizontal: 15,
    marginTop: 30,
    marginBottom: 15,
  },
  toolbar: {
    justifyContent: 'center',
    paddingVertical: 5,
    marginTop: 10,
    flexDirection: 'row',
  },
  back: {
    marginLeft: 10,
  },
  txtTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  positionCenter: {
    height: Dimensions.get('window').height,
  },
});
