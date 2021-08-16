import React, {Component} from 'react';
import ScrollableItem from './../../../components/molecules/ScrollableItem';
import {withNavigation} from 'react-navigation';
import IconLoading from './../../../components/atoms/IconLoading';
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

// function IconLoading() {
//   return (
//     <View
//       style={{
//         alignItems: 'center',
//         flex: 2,
//         marginVertical: 80,
//       }}>
//       <ActivityIndicator size="large" color="#540000" />
//     </View>
//   );
// }

function TampilSemuaBuku(props) {
  return (
    <ScrollView
      horizontal={true}
      style={{
        flexDirection: 'row',
      }}>
      {props.listData.map((val, index) => (
        <ScrollableItem
          key={index}
          title={val.title.substring(0, 35) + '...'}
          img={val.thumb}
        />
      ))}
    </ScrollView>
  );
}

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

class ScrollableBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      isLoading: true,
      tidakada: false,
      listData: [],
    };
    this.url = 'https://masak-apa.tomorisakura.vercel.app/api/';
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
    await fetch(this.url + 'recipes')
      .then(response => response.json())
      .then(json => {
        this.setState({listData: json.results});
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
        <TampilSemuaBuku listData={this.state.listData} />
      </View>
    );
  }
}

export default withNavigation(ScrollableBooks);
