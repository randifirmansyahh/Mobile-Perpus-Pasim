import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

//TODO header sudah normalize

const Header = () => {
  return (
    <View style={styles.box}>
      <View style={styles.bgImage}>
        <Image
          source={require('../../../assets/images/logo/pasim.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>Perpustakaan Universitas Nasional PASIM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#540000',
    height: normalize(60),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: normalize(60),
  },
  bgImage: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(40),
    backgroundColor: 'white',
    marginLeft: normalize(16),
  },
  text: {
    fontSize: normalize(15),
    color: 'white',
    marginLeft: normalize(15),
  },
  image: {
    height: normalize(40),
    width: normalize(40),
    position: 'absolute',
  },
});

export default Header;
