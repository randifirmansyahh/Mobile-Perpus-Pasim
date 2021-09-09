import React, {Component} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './../../../components/molecules/Header';
import GarisKecil from './../../../components/atoms/GarisKecil/index';
import n from 'react-native-normalize';

class QRAnggota extends Component {
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
      } else {
        alert('NIM tidak ditemukan, silahkan untuk Login ulang');
        this.setState({
          nim: '',
        });
        this.props.navigation.navigate('Home');
      }
    });

    AsyncStorage.getItem('@nama', (error, result) => {
      if (result) {
        this.setState({
          nama: result,
        });
      } else {
        alert('nama tidak ditemukan, silahkan untuk Login ulang');
        this.setState({
          nama: '',
        });
        this.props.navigation.navigate('Home');
      }
    });
  }

  render() {
    let url = this.state.nim + ',' + this.state.nama;

    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.titleTop}>
          Yuk isi daftar kunjungan perpustakaan !
        </Text>
        <View style={styles.qr}>
          <QRCode
            value={url}
            quietZone={n(5)}
            size={n(300)}
            enableLinearGradient={true}
            linearGradient={['red', 'black']}
          />
        </View>
        <GarisKecil />
        <Text style={styles.bagaimana}>Bagaimana caranya ?</Text>
        <GarisKecil />
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{flexDirection: 'column', marginLeft: 32, marginTop: 16}}>
            <View
              style={{width: '90%', flexDirection: 'row', marginVertical: 10}}>
              <Text>1. </Text>
              <Text style={{marginLeft: 10}}>
                Datanglah ke perpustakaan Universitas Nasional PASIM.
              </Text>
            </View>
            <View
              style={{width: '90%', flexDirection: 'row', marginVertical: 10}}>
              <Text>2. </Text>
              <Text style={{marginLeft: 10}}>
                Scan QR Code kamu dengan Scanner yang disediakan oleh petugas.
              </Text>
            </View>
            <View
              style={{width: '90%', flexDirection: 'row', marginVertical: 10}}>
              <Text>3. </Text>
              <Text style={{marginLeft: 10}}>
                Terima kasih telah mengunjungi perpustakaan.
              </Text>
            </View>
            <View
              style={{width: '90%', flexDirection: 'row', marginVertical: 10}}>
              <Text>4. </Text>
              <Text style={{marginLeft: 10}}>
                Untuk meminjam buku, kamu dapat melihat di halaman utama,
                kemudian klik tombol Pinjam Buku.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  titleTop: {
    fontSize: n(20),
    fontWeight: 'bold',
    textAlign: 'center',
    margin: n(16),
  },
  qr: {
    alignSelf: 'center',
    margin: n(16),
    flex: 1,
  },
  bagaimana: {
    fontSize: n(20),
    fontWeight: 'bold',
    marginLeft: n(16),
    marginVertical: n(6),
  },
});

export default QRAnggota;
