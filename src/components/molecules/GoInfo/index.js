import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

const link = () => {
  Linking.openURL('https://e-resources.perpusnas.go.id/');
};

const askSee = () => {
  Alert.alert('Daftar', 'Ingin mendaftar ke perpustakaan Nasional ?', [
    {
      text: 'Tidak',
    },
    {
      text: 'Ya',
      onPress: () => link(),
    },
  ]);
};

const GoInfo = () => {
  return (
    <View style={{padding: 16}}>
      <View
        style={{
          paddingBottom: 20,
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#1c1c1c',
            marginTop: 15,
            marginBottom: 20,
          }}>
          E-RESOURCES
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={require('./../../../assets/images/dummy/logoperpusonline.png')}
              style={{width: 180, height: 100}}
            />
          </View>
          <View style={{marginLeft: 16, flex: 1}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#4a4a4a',
              }}>
              Daftar Perpustakaan Nasional
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'normal',
                color: '#4a4a4a',
                marginTop: 10,
              }}>
              perpustakaan digital online seperti jurnal , ebook, dan
              karya-karya referensi online lainnya.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => askSee()}
          style={{
            backgroundColor: '#540000',
            borderRadius: 4,
            alignSelf: 'flex-end',
            marginTop: 16,
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: 'white',
              paddingHorizontal: 12,
              paddingVertical: 11,
              textAlign: 'center',
            }}>
            DAFTAR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoInfo;
