import React from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import Navbar from './../../../containers/organisms/NavBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Bantuan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nim: '',
      nama: '',
    };
    AsyncStorage.getItem('@nim', (error, result) => {
      if (result) {
        this.setState({
          nim: result,
        });
      }
    });
    AsyncStorage.getItem('@nama', (error, result) => {
      if (result) {
        this.setState({
          nama: result,
        });
      }
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text>Halaman Bantuan</Text>
          <Text>Hello, {this.state.nama}</Text>
        </View>
        <Navbar />
      </View>
    );
  }
}
