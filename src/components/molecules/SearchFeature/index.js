import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {withNavigation} from 'react-navigation';

const linkWa = () => {
  Linking.openURL(
    'mailto:perpuspasim@gmail.com?subject=Bantuan&body=Halo, Saya butuh bantuan !',
  );
};

const askHelp = () => {
  Alert.alert('Bantuan', 'Butuh bantuan dalam penggunaan aplikasi ?', [
    {
      text: 'Tidak',
    },
    {
      text: 'Ya',
      onPress: () => linkWa(),
    },
  ]);
};

class SearchFeature extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            marginHorizontal: 17,
            paddingTop: 15,
            flexDirection: 'row',
          }}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              onFocus={() => this.props.navigation.navigate('CariBuku')}
              placeholder="Cari buku apa ?"
              style={{
                borderWidth: 1,
                borderColor: '#E8E8E8',
                borderRadius: 25,
                height: 40,
                fontSize: 13,
                paddingLeft: 45,
                paddingRight: 20,
                marginRight: 17,
                color: 'black',
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
          <TouchableOpacity
            onPress={() => askHelp()}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('./../../../assets/images/logo/pasim.png')}
              style={{
                width: 35,
                height: 35,
                backgroundColor: 'white',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(SearchFeature);
