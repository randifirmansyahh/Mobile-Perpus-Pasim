import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

//TODO Splash sudah normalize

export default class SplashScreen extends Component {
  render() {
    // Loading Splash
    setTimeout(() => this.props.navigation.navigate('Auth'), 3000);

    // Rute logo
    const rute = './../../../assets/images/logo/';

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require(rute + 'pasim.png')} />
        <View style={styles.row}>
          <Text style={styles.text1}>Mobile</Text>
          <Text style={styles.text2}> Perpus Pasim</Text>
        </View>
      </View>
    );
  }
}

// Styling
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    height: normalize(80),
    width: normalize(80),
    marginBottom: normalize(20),
  },
  text1: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontSize: normalize(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(20),
  },
  row: {
    flexDirection: 'row',
  },
});
