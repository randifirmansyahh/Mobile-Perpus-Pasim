import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import Navbar from './../../../containers/organisms/NavBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FloatingButton from '../../../components/molecules/FloatingButton';

export default class Account extends React.Component {
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

  logout() {
    AsyncStorage.removeItem('@nim');
    this.props.navigation.navigate('Login');
  }

  render() {
    const askLogout = () => {
      Alert.alert('Keluar', 'Yakin untuk keluar dari akun ?', [
        {
          text: 'Tidak',
          // onPress: () => AsyncStorage.setItem('@nim', '0203181044'),
        },
        {
          text: 'Ya',
          onPress: () => this.logout(),
        },
      ]);
    };

    // <View style={{flex: 1}}>
    //   <View style={{flex: 1}}>
    //     <Text>Halaman Account</Text>
    //     <Text>Hello, {this.state.nama}</Text>
    //     <TouchableOpacity
    //       title="Logout"
    //       style={{
    //         backgroundColor: 'red',
    //         height: 40,
    //         width: 100,
    //         alignSelf: 'center',
    //         justifyContent: 'center',
    //         borderRadius: 8,
    //       }}
    //       onPress={() => askLogout()}>
    //       <Text
    //         style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
    //         Keluar
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    //   <Navbar />
    // </View>;

    return (
      <View
        style={{
          height: '100%',
          width: '100%',
        }}>
        <ImageBackground
          source={require('./../../../assets/images/dummy/pasim.jpg')}
          style={{
            width: '100%',
            height: '38%',
            flex: 1,
            backgroundColor: 'white',
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                width: '100%',
                flex: 1,
                // borderBottomRightRadius: 80,
                // borderBottomLeftRadius: 80,
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/images/logo/pasim.png')}
                style={{
                  height: 50,
                  width: 50,
                  marginLeft: 16,
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  marginLeft: 16,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                PERPUSTAKAAN UNIVERSITAS NASIONAL PASIM
              </Text>
            </View>
          </View>
          <View style={{flex: 4}}>
            <View
              style={{
                height: '90%',
                width: '100%',
                flex: 1,
                borderTopLeftRadius: 80,
                borderTopRightRadius: 80,
              }}>
              <View style={{alignItems: 'center', marginVertical: 150}}>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    marginTop: 40,
                    backgroundColor: '#540000',
                    height: 200,
                    borderRadius: 20,
                    width: '90%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 25,
                      fontWeight: 'bold',
                      marginBottom: 20,
                    }}>
                    Informasi Akun :
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      marginBottom: 16,
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    {this.state.nim}
                  </Text>
                  <Text
                    style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
                    {this.state.nama}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{flex: 3}}>
            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                flex: 1,
                borderTopLeftRadius: 80,
                borderTopRightRadius: 80,
              }}>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#1C2938',
                    height: 50,
                    width: '70%',
                    marginTop: 40,
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}
                  onPress={() => askLogout()}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      borderTopRightRadius: 80,
                    }}>
                    KELUAR
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                marginTop: 60,
                textAlign: 'center',
                color: '#adadad',
                backgroundColor: 'white',
              }}>
              @CopyRight Perpus Pasim 2021
            </Text>
          </View>
        </ImageBackground>
        <FloatingButton />
        <Navbar />
      </View>
    );
  }
}
