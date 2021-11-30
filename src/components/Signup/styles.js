import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 10,
  },
  textLogin: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  bgLogin: {
    height: 42,
    borderRadius: 15,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'green',
  },
  bgGroupDate: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  textDate: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    padding: 4,
    marginRight: 10,
    fontSize: 17,
  },
});
