import React, {useEffect, Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Auth extends Component {
  render() {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@nim');
        if (value !== null) {
          this.props.navigation.navigate('Home');
        } else {
          this.props.navigation.navigate('Intro');
        }
      } catch (e) {
        alert('Server sibuk');
      }
    };
    getData();
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
}
