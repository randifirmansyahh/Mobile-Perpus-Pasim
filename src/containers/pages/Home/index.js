import React, {Component} from 'react';
import {ScrollView, View, Alert, Linking} from 'react-native';

// Atom
import GarisAbu from './../../../components/atoms/GarisAbu';

// Molecules
import SearchFeature from './../../../components/molecules/SearchFeature';
import GoNews from './../../../components/molecules/GoNews';
import GoBanner from './../../../components/molecules/GoBanner';
import GoInfo from './../../../components/molecules/GoInfo';
import WebPasim from './../../../components/molecules/WebPasim';
import WebPub from './../../../components/molecules/WebPub';
import Header from './../../../components/molecules/Header';

// Containers
import NavBar from './../../../containers/organisms/NavBar';
import ScrollableProduct from './../../../containers/organisms/ScrollableProduct';
import HomeMainFeature from './../../../containers/organisms/HomeMainFeature';
import HomeGopay from './../../../containers/organisms/HomeGopay';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

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
          <HomeGopay />
          {/* <HomeMainFeature /> */}
          <GarisAbu />
          <ScrollableProduct />
          <GarisAbu />
          <GoNews onPress={() => askSee(perpus)} />
          <GoInfo />
          {/* <GoBanner /> */}
          <WebPasim onPress={() => askSee(pasim)} />
          <WebPub onPress={() => askSee(pub)} />
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}

export default Home;
