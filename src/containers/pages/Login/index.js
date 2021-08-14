import React from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formNim: '',
      formPass: '',
      nim: '',
      nama: '',
      password: '',
    };
    // hosting
    this.url = 'https://perpuspasim.000webhostapp.com/ApiAnggota.php';
    // Hotspot Laptop
    // this.url = 'http://192.168.137.1/Mine/Crudphpapi/ApiAnggota.php';
    // Hostpot Hp
    // this.url = 'http://192.168.43.216/Mine/Crudphpapi/ApiAnggota.php';
  }

  async cekLogin(nim, pass) {
    try {
      if (this.state.formNim == '' && this.state.formPass == '') {
        alert('Harap masukan NIM dan Password');
      } else if (this.state.formNim == '') {
        alert('Masukan NIM terlebih dahulu');
      } else if (this.state.formPass == '') {
        alert('Masukan Password terlebih dahulu');
      } else {
        await fetch(this.url + '/?op=detail&nim=' + nim)
          .then(response => response.json())
          .then(json => {
            this.setState({nim: json.data.result[0].nim});
            this.setState({nama: json.data.result[0].nama});
            this.setState({password: json.data.result[0].password});
            if (this.state.password == pass) {
              AsyncStorage.setItem('@nim', this.state.nim);
              AsyncStorage.setItem('@nama', this.state.nama);
              this.props.navigation.navigate('Home');
            } else {
              alert('Password salah');
            }
          })
          .catch(
            (error = () =>
              alert(
                'NIM tidak terdaftar, Silahkan registrasi terlebih dahulu',
              )),
          );
      }
    } catch (error) {}
  }

  render() {
    // const Loading = () => {
    //   return (
    //     <View style={{flex: 1, justifyContent: 'center'}}>
    //       <ActivityIndicator />
    //     </View>
    //   );
    // };

    // <View style={styles.container}>
    //       <View style={{}}>
    //         <Image
    //           source={require('../../../assets/images/logo/pasim.png')}
    //           style={styles.logo}
    //         />
    //       </View>
    //       <View style={{alignItems: 'center'}}>
    //         <View style={{marginBottom: 20}}>
    //           <Text style={{fontSize: 20, fontWeight: 'bold'}}>
    //             Silahkan Masuk
    //           </Text>
    //         </View>
    //         <View style={styles.backgroundInput}>
    //           <View style={styles.inputView}>
    //             <TextInput
    //               style={styles.inputText}
    //               placeholder="NIM"
    //               placeholderTextColor="#a6a6a6"
    //               onChangeText={textNim => {
    //                 this.setState({formNim: textNim});
    //               }}
    //               keyboardType="numeric"
    //             />
    //           </View>
    //           <View style={styles.inputView}>
    //             <TextInput
    //               style={styles.inputText}
    //               secureTextEntry
    //               placeholder="Password"
    //               placeholderTextColor="#a6a6a6"
    //               onChangeText={textPass => {
    //                 this.setState({formPass: textPass});
    //               }}
    //             />
    //           </View>
    //         </View>
    //         <TouchableOpacity
    //           onPress={() => alert('Silahkan hubungi petugas perpustakaan')}>
    //           <Text style={styles.forgot}>Lupa password ?</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //           style={styles.loginBtn}
    //           onPress={() =>
    //             this.cekLogin(this.state.formNim, this.state.formPass)
    //           }>
    //           <Text style={{color: 'white', fontWeight: 'bold'}}> MASUK </Text>
    //         </TouchableOpacity>
    //         <Text style={{marginVertical: 12}}>Belum punya akun ?</Text>
    //         <TouchableOpacity
    //           onPress={() => this.props.navigation.navigate('Daftar')}>
    //           <Text style={{color: 'blue'}}> Daftar </Text>
    //         </TouchableOpacity>
    //       </View>

    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View style={{backgroundColor: '#540000', flex: 0.4}}>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              flex: 1,
              borderBottomRightRadius: 80,
              flexDirection: 'row',
              paddingVertical: 35,
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
              style={{alignSelf: 'center', marginLeft: 16, fontWeight: 'bold'}}>
              PERPUSTAKAAN UNIVERSITAS NASIONAL PASIM
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: 'white', height: 550}}>
          <View
            style={{
              backgroundColor: '#540000',
              height: '90%',
              width: '100%',
              flex: 1,
              borderBottomRightRadius: 80,
              borderTopLeftRadius: 80,
            }}>
            <View style={{alignItems: 'center', marginVertical: 100}}>
              <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                SILAHKAN MASUK
              </Text>
              <View
                style={{
                  width: '90%',
                  alignItems: 'center',
                  marginTop: 40,
                  backgroundColor: 'white',
                  borderRadius: 20,
                }}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    width: '70%',
                    marginTop: 60,
                    borderRadius: 10,
                    paddingLeft: 16,
                    height: 40,
                  }}
                  // autoFocus={true}
                  placeholder="NIM"
                  placeholderTextColor="#a6a6a6"
                  onChangeText={textNim => {
                    this.setState({formNim: textNim});
                  }}
                  keyboardType="numeric"
                />
                <View
                  style={{
                    backgroundColor: '#540000',
                    height: 1,
                    width: '70%',
                  }}
                />
                <TextInput
                  style={{
                    width: '70%',
                    marginTop: 20,
                    borderRadius: 10,
                    paddingLeft: 16,
                    height: 40,
                    marginBottom: 2,
                  }}
                  secureTextEntry
                  placeholder="Password"
                  placeholderTextColor="#a6a6a6"
                  onChangeText={textPass => {
                    this.setState({formPass: textPass});
                  }}
                />
                <View
                  style={{
                    backgroundColor: '#540000',
                    height: 1,
                    width: '70%',
                  }}
                />
                <View
                  style={{
                    marginVertical: 40,
                    alignSelf: 'flex-end',
                    marginRight: '15%',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      alert('Silahkan hubungi petugas perpustakaan')
                    }>
                    <Text style={{color: 'black'}}>Lupa Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#540000', flex: 1}}>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              flex: 1,
              borderTopLeftRadius: 80,
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
                onPress={() =>
                  this.cekLogin(this.state.formNim, this.state.formPass)
                }>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderTopRightRadius: 80,
                  }}>
                  MASUK
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <Text>Belum memiliki akun?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Daftar')}>
                <Text
                  style={{
                    marginLeft: 5,
                    fontWeight: 'bold',
                    color: 'darkblue',
                  }}>
                  Daftar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flex: 0.2}}>
          <Text
            style={{
              marginBottom: 16,
              textAlign: 'center',
              color: '#adadad',
              backgroundColor: 'white',
            }}>
            @CopyRight Perpus Pasim 2021
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
  },
  backgroundInput: {
    borderRadius: 20,
    paddingTop: 40,
    backgroundColor: '#540000',
    alignItems: 'center',
    width: '95%',
    height: 200,
  },
  logo: {
    marginBottom: 50,
    height: 50,
    width: 50,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    padding: 20,
    marginVertical: 5,
  },
  inputText: {
    height: 50,
    color: 'black',
    borderColor: 'black',
  },
  forgot: {
    color: 'black',
    fontSize: 15,
    paddingTop: 12,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: 'green',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 10,
  },
});
