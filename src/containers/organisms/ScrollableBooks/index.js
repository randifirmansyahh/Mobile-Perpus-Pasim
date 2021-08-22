import React, {Component} from 'react';
import ScrollableItem from './../../../components/molecules/ScrollableItem';
import {withNavigation} from 'react-navigation';
import IconLoading from './../../../components/atoms/IconLoading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
  ActivityIndicator,
} from 'react-native';

function GagalMemuat(props) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 80,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Gagal memuat konten,
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Mohon periksa jaringan anda
      </Text>
      <TouchableOpacity
        onPress={() => props.navigate('Auth')}
        style={{
          height: 25,
          width: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#540000',
          marginVertical: 10,
        }}>
        <Text style={{color: 'white'}}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
}

function TombolLihatSemua(props) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
      }}
      onPress={() => props.navigate('CariBuku')}>
      <Text
        style={{
          marginTop: 12,
          fontSize: 17,
          fontWeight: 'bold',
          color: '#540000',
          alignSelf: 'flex-end',
        }}>
        Lihat Semua
      </Text>
    </TouchableOpacity>
  );
}

function IconBukuTerbaru() {
  return (
    <>
      <Image
        source={require('../../../assets/images/icon/book.png')}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          marginLeft: 8,
        }}
      />
      <Text
        style={{
          marginTop: 12,
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1c1c1c',
        }}>
        Buku Terbaru
      </Text>
    </>
  );
}

function TampilSemuaBuku(props) {
  return (
    <ScrollView
      horizontal={true}
      style={{
        flexDirection: 'row',
      }}>
      {props.listData.map((val, index) => (
        <ScrollableItem
          onPress={() => {
            AsyncStorage.setItem('@idBuku', val.id);
            props.navigate('DetailBuku');
          }}
          key={index}
          title={val.judul.substring(0, 35) + '...'}
          img={val.foto}
        />
      ))}
    </ScrollView>
  );
}

class ScrollableBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      idBuku: '',
      isLoading: true,
      tidakada: false,
      listData: [],
    };
    // this.url = 'https://masak-apa.tomorisakura.vercel.app/api/';

    // laptop
    // this.url = 'http://192.168.137.1/Mine/PerpusPASIM/ScanBuku/ApiBuku.php';

    // hp
    this.url = 'http://192.168.43.216/Mine/PerpusPASIM/ScanBuku/ApiBuku.php';
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  componentDidMount() {
    this.Semua();
  }

  async Semua() {
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        this.setState({listData: json.data.result});
        this.setState({isLoading: false});
        !this.state.listData
          ? this.setState({tidakada: true})
          : this.setState({tidakada: false});
      })
      .catch(error => {
        this.setState({isLoading: false});
        this.setState({tidakada: true});
      });
  }

  render() {
    return (
      <View
        style={{
          borderBottomColor: '#e8e9ed',
          paddingBottom: 16,
        }}>
        <View style={{padding: 16, flexDirection: 'row', alignItems: 'center'}}>
          <IconBukuTerbaru />
          <TombolLihatSemua navigate={this.props.navigation.navigate} />
        </View>
        {this.state.tidakada == true ? (
          <GagalMemuat navigate={this.props.navigation.navigate} />
        ) : null}
        {this.state.isLoading == true ? <IconLoading /> : null}
        <TampilSemuaBuku
          navigate={this.props.navigation.navigate}
          listData={this.state.listData}
        />
      </View>
    );
  }
}

export default withNavigation(ScrollableBooks);
