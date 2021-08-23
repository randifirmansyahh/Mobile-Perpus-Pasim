import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Header from './../../../components/molecules/Header';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const warna = '#540000';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: responsiveWidth(8),
    height: responsiveHeight(10),
  },
  text: {
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    marginTop: responsiveHeight(-15),
  },
  title: {
    fontSize: 22,
    color: warna,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: responsiveHeight(2),
    padding: 20,
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
  },
});

const slides = [
  {
    key: '1',
    title: 'Isi daftar kunjungan dengan mudah!',
    text: 'Mengisi daftar kunjungan biasanya harus mengisi identitas dan keperluan pengunjung. Dengan hadirnya aplikasi ini, hanya dengan scan QR Code tanpa ribet!',
    // Lokasi gambar mu
    image: require('../../../assets/images/dummy/scananggota.jpg'),
    colors: ['#fff'],
  },
  {
    key: '2',
    title: 'Pinjam buku hanya dengan Scan QR!',
    text: 'Mudah! Meminjam buku yang kamu inginkan hanya dengan Scan QR yang ada apa buku favoritmu!.',
    // Lokasi gambar mu
    image: require('../../../assets/images/dummy/handbook.jpg'),
    colors: ['#fff'],
  },
  {
    key: '3',
    title: 'Cari buku favoritmu dengan mudah!',
    text: 'Banyak buku yang tersedia di perpustakaan, kamu bisa mencari informasi sekilas tentang buku tersebut dan mencari tahu lokasi buku tersebut!',
    // Lokasi gambar mu
    image: require('../../../assets/images/dummy/caribuku.jpg'),
    colors: ['#fff'],
  },
  {
    key: '4',
    title: 'Daftarkan dirimu sekarang!',
    text: 'Tunggu apa lagi? ayo daftarkan diri kamu untuk mendapatkan fasilitas luar biasa yang terdapat di mobile aplikasi ini!',
    // Lokasi gambar mu
    image: require('../../../assets/images/dummy/registernow.jpg'),
    colors: ['#fff'],
  },
];

export default class Intro extends React.Component {
  _renderItem = ({item, dimensions}) => (
    <View
      style={[
        styles.mainContent,
        {
          flex: 1,
          paddingTop: item.topSpacer,
          paddingBottom: item.bottomSpacer,
          width: dimensions.width,
          backgroundColor: 'white',
        },
      ]}
      colors={item.color}>
      <Text style={styles.title}>{item.title}</Text>
      <Image
        source={item.image}
        style={{marginTop: -100, width: 300, height: 300, borderRadius: 100}}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <>
        <Header />
        <AppIntroSlider
          data={slides}
          slides={slides}
          renderItem={this._renderItem}
          // bottomButton
          showPrevButton
          // showSkipButton
          hideNextButton
          dotStyle={{backgroundColor: '#DDD'}}
          activeDotStyle={{backgroundColor: warna}}
          renderNextButton={() => {
            return (
              <Text
                style={{
                  fontSize: responsiveFontSize(2.3),
                  fontWeight: 'bold',
                  color: warna,
                  marginRight: 10,
                  padding: 10,
                  borderRadius: 10,
                  //   backgroundColor: '#dbdbdb',
                }}>
                Lanjut
              </Text>
            );
          }}
          renderPrevButton={() => {
            return (
              <Text
                style={{
                  fontSize: responsiveFontSize(2.3),
                  fontWeight: 'bold',
                  color: warna,
                  marginLeft: 10,
                  padding: 10,
                  borderRadius: 10,
                  //   backgroundColor: '#dbdbdb',
                }}>
                Kembali
              </Text>
            );
          }}
          renderDoneButton={() => {
            return (
              <Text
                style={{
                  fontSize: responsiveFontSize(2.3),
                  fontWeight: 'bold',
                  color: 'white',
                  marginRight: 10,
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: warna,
                }}>
                Selesai
              </Text>
            );
          }}
          // hideDoneButton
          // onSkip={() => console.log("skipped")}
          onDone={() => this.props.navigation.navigate('Login')}
        />
        <View style={{paddingTop: 30, backgroundColor: 'white'}} />
      </>
    );
  }
}
