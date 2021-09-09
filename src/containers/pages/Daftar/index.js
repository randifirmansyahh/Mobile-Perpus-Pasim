import React from 'react';
import Api from '../../../utils/Api/index';
import Header from './../../../components/molecules/Header';
import Footer from './../../../components/atoms/Footer';
import normalize from 'react-native-normalize';
import {
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

const warna = '#540000';

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
    this.url = Api.host + 'ApiAnggota.php';
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

  // <View
  //       style={{
  //         height: '100%',
  //         width: '100%',
  //         flex: 1,
  //         backgroundColor: 'white',
  //       }}>
  //       <View style={{backgroundColor: '#540000', height: 90}}>
  //         <View
  //           style={{
  //             backgroundColor: 'white',
  //             width: '100%',
  //             flex: 1,
  //             borderBottomRightRadius: 80,
  //             flexDirection: 'row',
  //             paddingVertical: 35,
  //           }}>
  //           <Image
  //             source={require('../../../assets/images/logo/pasim.png')}
  //             style={{
  //               height: 50,
  //               width: 50,
  //               marginLeft: 16,
  //               alignSelf: 'center',
  //             }}
  //           />
  //           <Text
  //             style={{
  //               alignSelf: 'center',
  //               marginLeft: 16,
  //               fontWeight: 'bold',
  //               fontSize: 14,
  //             }}>
  //             PERPUSTAKAAN UNIVERSITAS NASIONAL PASIM
  //           </Text>
  //         </View>
  //       </View>
  //       <View style={{backgroundColor: 'white', height: 550}}>
  //         <View
  //           style={{
  //             backgroundColor: '#540000',
  //             height: '90%',
  //             width: '100%',
  //             flex: 1,
  //             borderBottomRightRadius: 80,
  //             borderTopLeftRadius: 80,
  //           }}>
  //           <View style={{alignItems: 'center', marginVertical: 60}}>
  //             <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
  //               SILAHKAN DAFTAR
  //             </Text>
  //             <View
  //               style={{width: '100%', alignItems: 'center', marginTop: 40}}>
  //
  //
  //
  //               <View
  //                 style={{
  //                   backgroundColor: 'white',
  //                   width: '70%',
  //                   borderRadius: 10,
  //                   paddingLeft: 16,
  //                   flexDirection: 'row',
  //                   alignItems: 'center',
  //                   marginTop: 20,
  //                 }}>
  //                 <Text>+62</Text>
  //
  //               </View>
  //
  //             </View>
  //           </View>
  //         </View>
  //       </View>
  //       <View style={{backgroundColor: '#540000', flex: 1}}>
  //         <View
  //           style={{
  //             backgroundColor: 'white',
  //             width: '100%',
  //             flex: 1,
  //             borderTopLeftRadius: 80,
  //           }}>
  //           <View style={{alignItems: 'center'}}>
  //             {this.state.isLoading == true ? (
  //               <View
  //                 style={{
  //                   alignItems: 'center',
  //                   flex: 2,
  //                   marginTop: 40,
  //                 }}>
  //                 <ActivityIndicator size="large" color="#540000" />
  //               </View>
  //             ) : null}
  //             <TouchableOpacity
  //               style={{
  //                 backgroundColor: '#1C2938',
  //                 height: 50,
  //                 width: '70%',
  //                 marginTop: 40,
  //                 justifyContent: 'center',
  //                 borderRadius: 10,
  //               }}
  //               >
  //               <Text
  //                 style={{
  //                   color: 'white',
  //                   textAlign: 'center',
  //                   fontWeight: 'bold',
  //                   borderTopRightRadius: 80,
  //                 }}>
  //                 DAFTAR
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <View
  //             style={{
  //               alignSelf: 'center',
  //               flexDirection: 'row',
  //               marginTop: 20,
  //             }}>
  //             <Text>Sudah memiliki akun?</Text>
  //             <TouchableOpacity
  //               onPress={() => this.props.navigation.navigate('Login')}>
  //               <Text
  //                 style={{
  //                   marginLeft: 5,
  //                   fontWeight: 'bold',
  //                   color: 'darkblue',
  //                 }}>
  //                 Masuk
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </View>
  //       <View style={{flex: 0.2}}>
  //         <Text
  //           style={{
  //             marginBottom: 16,
  //             textAlign: 'center',
  //             color: '#adadad',
  //             backgroundColor: 'white',
  //           }}>
  //           @CopyRight Perpus Pasim 2021
  //         </Text>
  //       </View>
  //     </View>

  render() {
    return (
      <View style={styles.main}>
        <Header />
        <ScrollView style={styles.container}>
          <Text style={styles.textPerintah}>SILAHKAN DAFTAR</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.textInput}
              placeholder="NIM"
              placeholderTextColor="#a6a6a6"
              onChangeText={textNim => {
                this.setState({formNim: textNim});
              }}
              keyboardType="numeric"
            />
            <View style={styles.garis} />

            <TextInput
              style={styles.textInput}
              placeholder="Nama Lengkap"
              placeholderTextColor="#a6a6a6"
              onChangeText={textNama => {
                this.setState({formNama: textNama});
              }}
            />
            <View style={styles.garis} />

            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#a6a6a6"
              onChangeText={textPass => {
                this.setState({formPass: textPass});
              }}
            />
            <View style={styles.garis} />

            <TextInput
              style={styles.textInput}
              placeholder="No Telepon"
              placeholderTextColor="#a6a6a6"
              onChangeText={textHp => {
                this.setState({formHp: textHp});
              }}
              keyboardType="numeric"
            />
            <View style={styles.garis} />

            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#a6a6a6"
              onChangeText={textEmail => {
                this.setState({formEmail: textEmail});
              }}
            />
            <View style={styles.garis} />
          </View>
          {this.state.isLoading == true ? (
            <View style={styles.bgLoading}>
              <ActivityIndicator size="large" color="#540000" />
            </View>
          ) : null}
          <View style={styles.bgButtonMasuk}>
            <TouchableOpacity
              onPress={() =>
                this.daftarAnggota(
                  this.state.formNim,
                  this.state.formNama,
                  this.state.formPass,
                  this.state.formHp,
                  this.state.formEmail,
                )
              }>
              <Text style={styles.textMasuk}>Daftar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bgTextBottom}>
            <Text>Sudah memiliki akun?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.touchBottom}>Masuk</Text>
            </TouchableOpacity>
          </View>
          <Footer />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textPerintah: {
    color: 'white',
    backgroundColor: warna,
    fontSize: normalize(25),
    fontWeight: 'bold',
    textAlign: 'right',
    padding: normalize(15),
    marginLeft: normalize(10),
    borderTopLeftRadius: normalize(60),
    borderBottomLeftRadius: normalize(60),
    paddingRight: normalize(40),
    marginTop: normalize(40),
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(30),
    marginBottom: normalize(40),
    marginTop: normalize(40),
  },
  bgButtonMasuk: {
    backgroundColor: warna,
    padding: normalize(15),
    marginRight: normalize(10),
    borderTopRightRadius: normalize(60),
    borderBottomRightRadius: normalize(60),
    paddingLeft: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMasuk: {
    color: warna,
    padding: normalize(10),
    textAlign: 'center',
    borderRadius: normalize(5),
    width: normalize(150),
    backgroundColor: 'white',
  },
  bgLoading: {
    alignItems: 'center',
    paddingBottom: normalize(40),
  },
  bgTextBottom: {
    alignSelf: 'center',
    flexDirection: 'row',
    padding: normalize(30),
    paddingBottom: normalize(40),
  },
  touchBottom: {
    marginLeft: normalize(5),
    fontWeight: 'bold',
    color: 'darkblue',
  },
  garis: {
    height: normalize(4),
    width: '100%',
    backgroundColor: warna,
    marginBottom: normalize(20),
  },
  textInput: {
    backgroundColor: 'white',
    width: '100%',
    height: normalize(40),
    color: 'black',
    marginLeft: normalize(20),
  },
  textInputPass: {
    backgroundColor: 'white',
    width: '85%',
    marginRight: normalize(20),
    height: normalize(40),
    color: 'black',
    marginLeft: normalize(10),
  },
  boxPass: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: normalize(30),
  },
  iconMata: {
    height: normalize(20),
    width: normalize(20),
    margin: normalize(10),
  },
});
