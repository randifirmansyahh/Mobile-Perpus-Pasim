import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import GopayFeature from './../../../components/molecules/GopayFeature';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

class HomeGopay extends Component {
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
      <View style={{marginHorizontal: 17, marginVertical: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#540000',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            padding: 14,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            Hallo, {this.state.nama}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 14,
            backgroundColor: '#EEEEEE',
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
          }}>
          <GopayFeature
            onPress={() => this.props.navigation.navigate('QRAnggota')}
            title="Kunjungan"
            img={require('./../../../assets/images/icon/absen.png')}
          />
          <GopayFeature
            onPress={() => this.props.navigation.navigate('ScanQRCode')}
            title="Pinjam Buku"
            img={require('./../../../assets/images/icon/qr-code.png')}
          />
          <GopayFeature
            onPress={() => this.props.navigation.navigate('')}
            title="Cari Buku"
            img={require('./../../../assets/images/icon/books.png')}
          />
          <GopayFeature
            onPress={() => this.props.navigation.navigate('')}
            title="Bantuan"
            img={require('./../../../assets/images/icon/headphone.png')}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(HomeGopay);
