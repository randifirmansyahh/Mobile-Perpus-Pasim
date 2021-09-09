import React from 'react';
import AskSee from './../../atoms/AskSee';
import n from 'react-native-normalize';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  StyleSheet,
} from 'react-native';

const PerpusNasional = 'https://e-resources.perpusnas.go.id/';

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
            <Text style={styles.desc}>
              perpustakaan digital online seperti jurnal , ebook, dan
              karya-karya referensi online lainnya.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => AskSee(PerpusNasional)}
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

const styles = StyleSheet.create({
  desc: {
    fontSize: n(13),
    fontWeight: 'normal',
    color: '#4a4a4a',
    marginTop: n(10),
  },
});

export default GoInfo;
