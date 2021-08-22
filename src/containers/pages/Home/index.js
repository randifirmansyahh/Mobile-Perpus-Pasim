import React, {Component} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

// Atom
import GarisAbu from './../../../components/atoms/GarisAbu';

// Molecules
import SearchFeature from './../../../components/molecules/SearchFeature';
import GoInfo from './../../../components/molecules/GoInfo';
import Header from './../../../components/molecules/Header';

// Containers
import HomePerpus from './../../organisms/HomePerpus';
import NavBar from './../../organisms/NavBar';
import ScrollableBooks from './../../organisms/ScrollableBooks';
import ListWebsites from './../../organisms/ListWebsites';
import WebPerpusPasim from './../../organisms/WebPerpusPasim';

// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

class Home extends Component {
  constructor(props) {
    super(props);

    //Active Color Navigation
    AsyncStorage.setItem('@ac', 'Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.scroll}>
          <SearchFeature />
          <HomePerpus />
          <GarisAbu />
          <ScrollableBooks />
          <GarisAbu />
          <WebPerpusPasim />
          <GoInfo />
          <ListWebsites />
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    flex: 1,
  },
});

export default Home;
