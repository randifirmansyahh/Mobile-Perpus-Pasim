import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import ScrollableItem from './../../../components/molecules/ScrollableItem';

class ScrollableProduct extends Component {
  render() {
    const linkBukuPop = () => {
      Linking.openURL(
        'https://www.google.com/search?q=buku+terpopuler+tahun+ini',
      );
    };

    const askSee = () => {
      Alert.alert('Lihat', 'Ingin melihat buku - buku terbaru ?', [
        {
          text: 'Tidak',
        },
        {
          text: 'Ya',
          onPress: () => linkBukuPop(),
        },
      ]);
    };

    return (
      <View
        style={{
          borderBottomColor: '#e8e9ed',
          paddingBottom: 16,
        }}>
        <View style={{padding: 16, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/images/icon/book.png')}
            style={{height: 30, width: 30, marginRight: 10, marginLeft: 8}}
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
          <TouchableOpacity style={{flex: 1}} onPress={() => askSee()}>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}></View>
        </View>

        {/* Start Scrollable Item */}
        <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
          <ScrollableItem
            title="The Archer"
            img={require('../../../assets/images/dummy/thearcher.jpg')}
          />
          <ScrollableItem
            title="The Midnight Library"
            img={require('../../../assets/images/dummy/themight.jpg')}
          />
          <ScrollableItem
            title="Half of a Yellow Sun"
            img={require('../../../assets/images/dummy/half.jpg')}
          />
          <ScrollableItem
            title="Anxious People"
            img={require('../../../assets/images/dummy/anxious.jpg')}
          />
          <ScrollableItem
            title="The Vanishing Half"
            img={require('../../../assets/images/dummy/thepanish.jpg')}
          />
        </ScrollView>
        {/* end Scrollable Item */}
      </View>
    );
  }
}

export default ScrollableProduct;
