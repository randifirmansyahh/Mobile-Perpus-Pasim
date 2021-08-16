import React, {Component} from 'react';
import {ScrollView, View, Alert, Linking} from 'react-native';

// Atom
import GarisAbu from './../../../components/atoms/GarisAbu';

// Molecules
import SearchFeature from './../../../components/molecules/SearchFeature';
import GoNews from './../../../components/molecules/GoNews';
import GoInfo from './../../../components/molecules/GoInfo';
import Header from './../../../components/molecules/Header';

// Containers
import HomePerpus from './../../../containers/organisms/HomePerpus';
import NavBar from './../../../containers/organisms/NavBar';
import ScrollableBooks from './../../../containers/organisms/ScrollableBooks';

// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

class Home extends Component {
  constructor(props) {
    super(props);
    AsyncStorage.setItem('@ac', 'Home');
  }

  render() {
    const pasim = 'http://pasim.ac.id/';
    const perpus = 'http://pustaka.pasim.ac.id/';
    const pub = 'https://pubpasim.org/';

    const link = url => {
      Linking.openURL(url);
    };

    const askSee = url => {
      Alert.alert('Kunjungi', 'Ingin mengunjungi website ?', [
        {
          text: 'Tidak',
        },
        {
          text: 'Ya',
          onPress: () => link(url),
        },
      ]);
    };

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header />
        <ScrollView style={{flex: 1}}>
          <SearchFeature />
          <HomePerpus />
          <GarisAbu />
          <ScrollableBooks />
          <GarisAbu />
          <GoNews
            title="WEB-PERPUS"
            desc="Kunjungi juga web perpustakaan universitas nasional pasim untuk
          informasi lebih lanjut."
            onPress={() => askSee(perpus)}
            image={require('../../../assets/images/dummy/perpusfoto.jpg')}
          />
          <GoInfo />
          <GoNews
            title="WEB-PASIM"
            desc="Kunjungi juga web resmi universitas nasional pasim untuk informasi
          tentang kampus, pendaftaran dan beasiswa."
            onPress={() => askSee(pasim)}
            image={require('../../../assets/images/dummy/webpasim.jpg')}
          />
          <GoNews
            title="WEB-PUB"
            desc="Kunjungi juga web resmi beasiswa pemberdayaan umat berkelanjutan (PUB)
          universitas nasional pasim untuk informasi tentang beasiswa, kuliah
          gratis, syarat dan ketentuan pendaftaran."
            onPress={() => askSee(pub)}
            image={require('../../../assets/images/dummy/webpub.jpg')}
          />
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}

export default Home;
