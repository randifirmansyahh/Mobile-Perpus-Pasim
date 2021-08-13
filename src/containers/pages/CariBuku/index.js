import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SearchFeature from '../../../components/molecules/SearchFeature';
import Header from '../../../components/molecules/Header';
import FloatingButton from '../../../components/molecules/FloatingButton';

// https://masak-apa.tomorisakura.vercel.app/api/recipes all
// https://masak-apa.tomorisakura.vercel.app/api/search/?q= search

class CariBuku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      alamat: '',
      isLoading: true,
      tidakada: false,
      listData: [],
      idEdit: null,
    };
    this.url = 'https://masak-apa.tomorisakura.vercel.app/api/';
  }
  componentDidMount() {
    this.Semua();
  }

  async Semua() {
    await fetch(this.url + 'recipes')
      .then(response => response.json())
      .then(json => {
        // alert(json.results[0].title);
        // console.log('Hasil yang didapat: ' + JSON.stringify(json.results));
        // console.warn(JSON.stringify(json.results));
        this.setState({listData: json.results});
        this.setState({isLoading: false});
        !this.state.lisData
          ? this.setState({tidakada: true})
          : this.setState({tidakada: false});
      })
      .catch(error => {
        alert('Buku tidak ditemukan');
        console.log(error);
      });
  }

  async CariBuku(nama) {
    await fetch(this.url + 'search/?q=' + nama)
      .then(response => response.json())
      .then(json => {
        // alert(json.results[0].title);
        // console.log('Hasil yang didapat: ' + JSON.stringify(json.results));
        // console.warn(JSON.stringify(json.results));
        this.setState({listData: json.results});
        this.setState({isLoading: false});
        !this.state.lisData
          ? this.setState({tidakada: true})
          : this.setState({tidakada: false});
      })
      .catch(error => {
        alert('Buku tidak ditemukan');
        console.log(error);
      });
  }

  render() {
    return (
      <>
        {/* <SearchFeature /> */}
        <Header />
        <View
          style={{
            position: 'relative',
            flex: 1,
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 50,
          }}>
          <TextInput
            placeholder="Cari buku apa ?"
            autoFocus={true}
            onChangeText={q => {
              this.setState({isLoading: true});
              this.setState({tidakada: false});
              this.setState({listData: []});
              this.CariBuku(q);
            }}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 25,
              height: 40,
              fontSize: 13,
              paddingLeft: 45,
              paddingRight: 20,
              marginRight: 17,
            }}
          />
          <Image
            source={require('../../../assets/images/icon/find.png')}
            style={{
              position: 'absolute',
              top: 7,
              left: 12,
              height: 22,
              width: 22,
            }}
          />
        </View>
        {this.state.isLoading == true ? (
          <View
            style={{
              alignItems: 'center',
              flex: 2,
            }}>
            <ActivityIndicator size="large" color="#540000" />
          </View>
        ) : null}
        {this.state.tidakada == true ? (
          <View
            style={{
              alignItems: 'center',
              flex: 2,
            }}>
            <Text>Buku tidak ditemukan !</Text>
          </View>
        ) : null}
        {!this.state.listData == [] ? (
          <ScrollView>
            {this.state.listData.map((val, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 16,
                  marginVertical: 16,
                }}>
                <Image
                  style={{height: 120, width: 120}}
                  source={{
                    uri: val.thumb,
                  }}
                />
                <View style={{width: '60%', marginLeft: 16}}>
                  <Text>{val.title}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        ) : null}
        <FloatingButton />
      </>
    );
  }
}

export default CariBuku;
