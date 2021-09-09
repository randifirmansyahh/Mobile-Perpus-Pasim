import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

export default class Login extends React.Component {
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
      isShow: true,
      formNim: '',
      formPass: '',
      nim: '',
      nama: '',
      password: '',
    };
    this.url = Api.host + 'ApiAnggota.php';
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
        this.setState({isLoading: true});
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
          .catch((error = () => alert('NIM tidak terdaftar.')));
      }
    } catch (error) {
      // this.setState({isLoading: false});
    } finally {
      this.setState({isLoading: false});
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <Header />
        <ScrollView style={styles.container}>
          <Text style={styles.textPerintah}>SILAHKAN MASUK</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.textInputNim}
              placeholder="NIM"
              placeholderTextColor="#a6a6a6"
              onChangeText={textNim => {
                this.setState({formNim: textNim});
              }}
              keyboardType="numeric"
            />
            <View style={styles.garis} />
            <View style={styles.boxPass}>
              <TextInput
                style={styles.textInputPass}
                secureTextEntry={this.state.isShow == true ? true : false}
                placeholder="Password"
                placeholderTextColor="#a6a6a6"
                onChangeText={textPass => {
                  this.setState({formPass: textPass});
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  this.state.isShow == true
                    ? this.setState({isShow: false})
                    : this.setState({isShow: true})
                }>
                <Image
                  source={
                    this.state.isShow == true
                      ? require('./../../../assets/images/icon/private.png')
                      : require('./../../../assets/images/icon/vision.png')
                  }
                  style={styles.iconMata}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.garis} />
            <TouchableOpacity style={styles.lupa} onPress={lupa}>
              <Text style={styles.textLupa}>Lupa kata sandi ?</Text>
            </TouchableOpacity>
          </View>
          {this.state.isLoading == true ? (
            <View style={styles.bgLoading}>
              <ActivityIndicator size="large" color="#540000" />
            </View>
          ) : null}
          <View style={styles.bgButtonMasuk}>
            <TouchableOpacity
              onPress={() => {
                this.cekLogin(this.state.formNim, this.state.formPass);
              }}>
              <Text style={styles.textMasuk}>Masuk</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bgTextBottom}>
            <Text>Belum memiliki akun?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Daftar')}>
              <Text style={styles.touchBottom}>Daftar</Text>
            </TouchableOpacity>
          </View>
          <Footer />
        </ScrollView>
      </View>
    );
  }
}

const lupa = () => {
  alert('Silahkan hubungi perpustakaan Universitas Nasional Pasim');
};

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
    paddingRight: normalize(30),
    marginTop: normalize(40),
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(30),
    marginTop: normalize(40),
  },
  lupa: {
    marginTop: normalize(30),
    width: '100%',
  },
  textLupa: {
    color: 'black',
    textAlign: 'right',
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
  },
  textInputNim: {
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
