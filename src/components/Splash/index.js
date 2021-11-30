import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import colors from '../../assets/theme/colors';

const SplashComponent = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Image
        width={40}
        height={40}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <Text style={styles.txtNameApp}>SeaFood</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    width: 200,
    height: 200,
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNameApp: {
    fontSize: 30,
    color: colors.red,
  },
  bgSplash: {
    height: '100%',
    width: '100%',
  },
});

export default SplashComponent;
