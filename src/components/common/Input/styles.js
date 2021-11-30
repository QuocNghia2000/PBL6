import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 12,
  },
  wrapper: {
    height: 42,
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderBottomWidth: 0.5,
    marginTop: 5,
    alignItems: 'center',
  },
  error: {
    color: colors.red,
    paddingTop: 5,
  },
  textInput: {
    width: '100%',
    flex: 1,
  },
  styleIcon: {
    fontSize: 25,
    color: 'grey',
  },
  bgRadioBtn: {
    margin: 20,
    textAlign: 'center',
    width: 85,
    padding: 10,
    fontSize: 17,
    borderRadius: 5,
    borderWidth: 1,
    alignSelf: 'center',
  },
  bgRadioGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
