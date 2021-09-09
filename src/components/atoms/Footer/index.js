import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

const Footer = () => {
  return <Text style={styles.text}>@CopyRight Perpus Pasim 2021</Text>;
};

const styles = StyleSheet.create({
  text: {
    marginBottom: normalize(16),
    textAlign: 'center',
    color: '#adadad',
    backgroundColor: 'white',
  },
});

export default Footer;
