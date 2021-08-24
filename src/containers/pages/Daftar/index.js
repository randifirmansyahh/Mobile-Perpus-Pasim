import React from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

export default class Daftar extends React.Component {
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      formNim: '',
      formNama: '',
      formPass: '',
      formHp: '',
      formEmail: '',
    };
    // hosting
    this.url = 'https://perpuspasim.000webhostapp.com/ApiAnggota.php';
    // Hotspot Laptop
    // this.url = 'http://192.168.137.1/Mine/Crudphpapi/ApiAnggota.php';
    // Hostpot Hp
    // this.url = 'http://192.168.43.216/Mine/Crudphpapi/ApiAnggota.php';
  }

  async daftarAnggota(nim, nama, pass, hp, email) {
    if (
      this.state.formNim == '' &&
      this.state.formNama == '' &&
      this.state.formPass == '' &&
      this.state.formHp == '' &&
      this.state.formEmail == ''
    ) {
      alert('Harap isi semua data');
    } else if (this.state.formNim == '') {
      alert('Masukan NIM terlebih dahulu');
    } else if (this.state.formNama == '') {
      alert('Masukan Nama Lengkap terlebih dahulu');
    } else if (this.state.formPass == '') {
      alert('Masukan Password terlebih dahulu');
    } else if (this.state.formHp == '') {
      alert('Masukan No Hp terlebih dahulu');
    } else if (this.state.formEmail == '') {
      alert('Masukan Email terlebih dahulu');
    } else {
      let create = this.url + '?op=create';
      this.setState({isLoading: true});
      try {
        await fetch(create, {
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:
            'nim=' +
            nim +
            '&nama=' +
            nama +
            '&password=' +
            pass +
            '&hp=' +
            hp +
            '&email=' +
            email,
        })
          .then(response => response.json())
          .then(json => {
            alert('Akun berhasil di daftarkan, Silahkan untuk masuk');
            this.props.navigation.navigate('Login');
          })
          .catch(
            (error = () =>
              alert('Pendaftaran akun gagal, Server sedang sibuk')),
          );
      } catch (error) {
        // alert('Pendaftaran akun gagal, Server sedang sibuk');
      } finally {
        this.setState({isLoading: false});
      }
    }
  }

  // <View style={styles.container}>
  //       <Image
  //         source={require('../../../assets/images/logo/pasim.png')}
  //         style={styles.logo}
  //       />
  //       <View style={styles.inputView}>
  //         <TextInput
  //           style={styles.inputText}
  //           placeholder="NIM"
  //           placeholderTextColor="white"
  //           onChangeText={text => {
  //             this.setState({formNim: text});
  //           }}
  //           keyboardType="numeric"
  //         />
  //       </View>
  //       <View style={styles.inputView}>
  //         <TextInput
  //           style={styles.inputText}
  //           placeholder="Nama Lengkap"
  //           placeholderTextColor="white"
  //           onChangeText={text => {
  //             this.setState({formNama: text});
  //           }}
  //         />
  //       </View>
  //       <View style={styles.inputView}>
  //         <TextInput
  //           style={styles.inputText}
  //           secureTextEntry
  //           placeholder="Password"
  //           placeholderTextColor="white"
  //           onChangeText={text => {
  //             this.setState({formPass: text});
  //           }}
  //         />
  //       </View>
  //       <TouchableOpacity
  //         style={styles.loginBtn}
  //         onPress={() =>
  //           this.daftarAnggota(
  //             this.state.formNim,
  //             this.state.formNama,
  //             this.state.formPass,
  //           )
  //         }>
  //         <Text style={{color: 'white', fontWeight: 'bold'}}> DAFTAR </Text>
  //       </TouchableOpacity>
  //       <Text style={{marginVertical: 12}}>Sudah punya akun ?</Text>
  //       <TouchableOpacity
  //         onPress={() => this.props.navigation.navigate('Login')}>
  //         <Text style={{color: 'blue'}}> Masuk </Text>
  //       </TouchableOpacity>
  //     </View>

  render() {
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
            <View style={{alignItems: 'center', marginVertical: 60}}>
              <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                SILAHKAN DAFTAR
              </Text>
              <View
                style={{width: '100%', alignItems: 'center', marginTop: 40}}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    width: '70%',
                    marginTop: 16,
                    borderRadius: 10,
                    paddingLeft: 16,
                  }}
                  placeholder="NIM"
                  placeholderTextColor="#a6a6a6"
                  onChangeText={textNim => {
                    this.setState({formNim: textNim});
                  }}
                  keyboardType="numeric"
                />
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    width: '70%',
                    marginTop: 20,
                    borderRadius: 10,
                    paddingLeft: 16,
                  }}
                  placeholder="Nama Lengkap"
                  placeholderTextColor="#a6a6a6"
                  onChangeText={textNama => {
                    this.setState({formNama: textNama});
                  }}
                />
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    width: '70%',
                    marginTop: 20,
                    borderRadius: 10,
                    paddingLeft: 16,
                  }}
                  placeholder="Password"
                  placeholderTextColor="#a6a6a6"
                  onChangeText={textPass => {
                    this.setState({formPass: textPass});
                  }}
                />
                <View
                  style={{
                    backgroundColor: 'white',
                    width: '70%',
                    borderRadius: 10,
                    paddingLeft: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Text>+62</Text>
                  <TextInput
                    style={{
                      backgroundColor: 'white',
                      width: '70%',
                      borderRadius: 10,
                    }}
                    placeholder="No Telepon"
                    placeholderTextColor="#a6a6a6"
                    onChangeText={textHp => {
                      this.setState({formHp: textHp});
                    }}
                    keyboardType="numeric"
                  />
                </View>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    width: '70%',
                    marginTop: 20,
                    borderRadius: 10,
                    paddingLeft: 16,
                  }}
                  placeholder="Email"
                  placeholderTextColor="#a6a6a6"
                  onChangeText={textEmail => {
                    this.setState({formEmail: textEmail});
                  }}
                />
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
              {this.state.isLoading == true ? (
                <View
                  style={{
                    alignItems: 'center',
                    flex: 2,
                    marginTop: 40,
                  }}>
                  <ActivityIndicator size="large" color="#540000" />
                </View>
              ) : null}
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
                  this.daftarAnggota(
                    this.state.formNim,
                    this.state.formNama,
                    this.state.formPass,
                    this.state.formHp,
                    this.state.formEmail,
                  )
                }>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderTopRightRadius: 80,
                  }}>
                  DAFTAR
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <Text>Sudah memiliki akun?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text
                  style={{
                    marginLeft: 5,
                    fontWeight: 'bold',
                    color: 'darkblue',
                  }}>
                  Masuk
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 50,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'gray',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    padding: 20,
    marginVertical: 5,
  },
  inputText: {
    height: 50,
    color: 'white',
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
