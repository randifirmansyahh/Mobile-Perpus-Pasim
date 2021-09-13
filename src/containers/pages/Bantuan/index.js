import React from 'react';
import {Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import Navbar from './../../../containers/organisms/NavBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FloatingButton from '../../../components/molecules/FloatingButton';
import Header from '../../../components/molecules/Header';

export default class Bantuan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      show: 0,
    };

    AsyncStorage.getItem('@nama', (error, result) => {
      if (result) {
        this.setState({
          nama: result,
        });
      }
    });
  }

  render() {
    const SapaNama = () => {
      return (
        <View
          style={{
            backgroundColor: 'white',
            flex: 0.7,
            justifyContent: 'center',
            marginVertical: 16,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Butuh Bantuan, {this.state.nama} ?
          </Text>
        </View>
      );
    };

    const DropDown = props => {
      return (
        <View
          style={{
            justifyContent: 'space-between',
            height: 50,
            borderTopWidth: 1,
            borderColor: '#ededed',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() =>
              this.state.show == props.urutan
                ? this.setState({show: 0})
                : this.setState({show: props.urutan})
            }>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                width: '90%',
                marginTop: 10,
                textAlign: 'left',
              }}>
              {props.judul}
            </Text>
          </TouchableOpacity>
        </View>
      );
    };

    const ListItem = props => {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text>{props.no}</Text>
          <Text style={{marginLeft: 16, marginBottom: 10}}>{props.isi}</Text>
        </View>
      );
    };

    const CaraKunjungan = () => {
      return (
        <>
          <ListItem
            no="1."
            isi="Datanglah ke perpustakaan Universitas Nasional PASIM."
          />
          <ListItem
            no="2."
            isi="Scan QR Code kamu dengan Scanner yang disediakan oleh petugas perpustakaan."
          />
          <ListItem
            no="3."
            isi="Terima kasih telah mengunjungi perpustakaan."
          />
        </>
      );
    };

    const CaraPinjamBuku = () => {
      return (
        <>
          <ListItem
            no="1."
            isi="Datanglah ke perpustakaan Universitas Nasional PASIM."
          />
          <ListItem
            no="2."
            isi="Cari buku yang ingin anda pinjam, Pastikan terdapat Barcode di
                  cover buku."
          />
          <ListItem
            no="3."
            isi="Scan QR Code pada cover buku, pastikan judul buku sama dengan
                  judul buku hasil Scan."
          />
          <ListItem
            no="4."
            isi="Tunggu sampai QR Code muncul di layar aplikasi, kemudian minta
                  petugas untuk melakukan scan pada Barcode di aplikasi anda."
          />
        </>
      );
    };

    const BukuTidakAdaQR = () => {
      return (
        <>
          <ListItem no="1." isi="Bawa buku tersebut ke petugas perpustakaan." />
          <ListItem
            no="2."
            isi="Laporkan bahwa terdapat buku yang tidak memiliki QR Code."
          />
          <ListItem no="3." isi="Terima kasih telah membantu kami." />
        </>
      );
    };

    const TelatMengembalikan = () => {
      return (
        <>
          <ListItem
            no="1."
            isi="Bawa buku yang telah di pinjam ke perpustakaan."
          />
          <ListItem no="2." isi="Datangi petugas perpustakaan." />
          <ListItem
            no="3."
            isi="Petugas akan mengenakan denda sesuai dengan syarat dan ketentuan yang berlaku."
          />
        </>
      );
    };

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* Logo */}
        <Header />
        {/* Figura */}
        <View
          style={{
            marginHorizontal: 16,
            backgroundColor: 'transparent',
            flex: 10,
          }}>
          {/* nama */}
          <SapaNama />
          {/* Bantuan     */}
          <View style={{flex: 10}}>
            {/* menu1 */}
            <View style={{backgroundColor: 'white'}}>
              {/* judul + tombol */}
              <DropDown
                judul="Bagaimana cara mengisi daftar kunjungan ?"
                urutan={1}
              />
              {this.state.show == 1 ? <CaraKunjungan /> : null}
              <DropDown
                judul="Bagaimana cara meminjam buku perpustakaan ?"
                urutan={2}
              />
              {this.state.show == 2 ? <CaraPinjamBuku /> : null}
              <DropDown
                judul="Bagaimana jika buku yang akan dipinjam tidak memiliki QR Code ?"
                urutan={3}
              />
              {this.state.show == 3 ? <BukuTidakAdaQR /> : null}
              <DropDown
                judul="Bagaimana jika saya telat mengembalikan buku tepat pada waktunya ?"
                urutan={4}
              />
              {this.state.show == 4 ? <TelatMengembalikan /> : null}
            </View>
          </View>
        </View>
        <FloatingButton />
      </View>
    );
  }
}
