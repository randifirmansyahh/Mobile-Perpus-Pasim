import React from 'react';
import {Text, View, Image} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: '#540000',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomRightRadius: 80,
      }}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: 'white',
          marginLeft: 16,
        }}>
        <Image
          source={require('../../../assets/images/logo/pasim.png')}
          style={{
            height: 50,
            width: 50,
            position: 'absolute',
          }}></Image>
      </View>
      <Text style={{color: 'white', fontSize: 17, marginLeft: 10}}>
        Perpustakaan Universitas Nasional PASIM
      </Text>
    </View>
  );
};

export default Header;
