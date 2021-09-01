import React, {Component} from 'react';
import {View, ActivityIndicator, Text, Image, ScrollView} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './../../../components/molecules/Header';
import GarisAbu from './../../../components/atoms/GarisAbu/index';

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
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header />
        <View
          style={{
            alignItems: 'center',
            height: '100%',
            width: '100%',
            paddingVertical: '17%',
            backgroundColor: 'white',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Yuk isi daftar kunjungan perpustakaan !
          </Text>
          <QRCode
            value={url}
            quietZone={5}
            size={300}
            enableLinearGradient={true}
            linearGradient={['red', 'black']}
          />
        </View>
        <GarisAbu />
        <View style={{marginVertical: 8, backgroundColor: 'white'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 16,
              marginVertical: 6,
            }}>
            Bagaimana caranya ?
          </Text>
        </View>
        <GarisAbu />
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

export default QRAnggota;
