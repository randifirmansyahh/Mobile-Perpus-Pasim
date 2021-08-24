import React, {Component} from 'react';
import {View, ActivityIndicator, Text, Image, ScrollView} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    let logoFromFile = require('./../../../assets/images/logo/pasim.png');
    let url = this.state.nim + ',' + this.state.nama;

    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            height: 70,
            backgroundColor: '#540000',
            borderBottomRightRadius: 80,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('./../../../assets/images/logo/pasim.png')}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: 'white',
              marginLeft: 16,
            }}
          />
          <Text style={{color: 'white', fontSize: 17, marginLeft: 10}}>
            Perpustakaan Universitas Nasional PASIM
          </Text>
        </View>
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
        <View
          style={{
            backgroundColor: '#ededed',
            height: 5,
            width: '100%',
          }}></View>
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
        <View
          style={{
            backgroundColor: '#ededed',
            height: 5,
            width: '100%',
          }}
        />
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

//
//
//
// BERATTTTT
//
//
//
//

// import React, {Component} from 'react';
// import {View, Image, Text, ActivityIndicator} from 'react-native';
// import canvas from 'react-native-canvas';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // 1. Import
// import {QRCode, Canvas} from 'easyqrcode-react-native';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nim: '',
//     };

//     try {
//       AsyncStorage.getItem('@nim', (error, result) => {
//         if (result) {
//           this.setState({
//             nim: result,
//           });
//         }
//       });
//     } catch (error) {
//       alert('NIM tidak ditemukan, silahkan untuk Login ulang');
//     }
//   }
//   // 3. Generate QRCode
//   generateQRCode = canvas => {
//     var isLoading = 'true';
//     var url = `http://192.168.137.1/Mine/Crudphpapi/ApiPengunjung.php?nim=${this.state.nim}`;
//     try {
//       if (canvas !== null) {
//         const logoImage = Image.resolveAssetSource(
//           require('./../../../assets/images/logo/pasim.png'),
//         ).uri;
//         // QRCode options
//         var options = {
//           text: url,
//           logo: logoImage,
//           quietZone: 5,
//           quietZoneColor: 'white',
//         };
//         // Create QRCode Object
//         var qrcode = new QRCode(canvas, options);
//         isLoading = 'false';

//         //   var qrCode = new QRCode(canvas, options);
//       }
//     } catch (error) {
//       alert('Tolong periksa jaringan anda');
//       this.navigation.navigate('Home');
//     }
//   };

//   render() {
//     return (
//       <View
//         style={{
//           alignItems: 'center',
//           height: '100%',
//           width: '100%',
//           paddingVertical: '20%',
//           backgroundColor: 'white',
//         }}>
//         <View
//           style={{
//             paddingVertical: 5,
//             paddingHorizontal: 5,
//             backgroundColor: 'black',
//             alignItems: 'center',
//             justifyContent: 'center',
//             flexDirection: 'column',
//           }}>
//           <View
//             style={{
//               paddingVertical: 5,
//               paddingHorizontal: 5,
//               backgroundColor: 'white',
//               alignItems: 'center',
//               justifyContent: 'center',
//               flexDirection: 'column',
//             }}>
//             <ActivityIndicator
//               style={{position: 'absolute'}}
//               size="large"
//               color="#00ff00"
//             />
//             {/* 2. QRCode Canvas  */}
//             <Canvas ref={this.generateQRCode} />
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// export default App;
