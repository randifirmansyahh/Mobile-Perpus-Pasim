import React, {Component} from 'react';
import {View} from 'react-native';
import MainFeature from './../../../components/molecules/MainFeature';

class HomeMainFeature extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 18,
        }}>
        {/* Start Isi Kotak - kotak */}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 18,
          }}>
          {/* Start Kotak - kotak pertama */}

          <MainFeature
            title="GO-RIDE"
            img={require('./../../../assets/images/icon/go-ride.png')}
          />
          <MainFeature
            title="GO-CAR"
            img={require('./../../../assets/images/icon/go-car.png')}
          />
          <MainFeature
            title="GO-BLUEBIRD"
            img={require('./../../../assets/images/icon/go-bluebird.png')}
          />
          <MainFeature
            title="GO-SEND"
            img={require('./../../../assets/images/icon/go-send.png')}
          />
        </View>
        {/*  */}
        {/* End Kotak kotak pertama */}

        {/*  */}
        {/* Start Kotak kotak kedua */}

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 18,
          }}>
          <MainFeature
            title="GO-DEALS"
            img={require('./../../../assets/images/icon/go-deals.png')}
          />
          <MainFeature
            title="GO-PULSA"
            img={require('./../../../assets/images/icon/go-pulsa.png')}
          />
          <MainFeature
            title="GO-FOOD"
            img={require('./../../../assets/images/icon/go-food.png')}
          />
          <MainFeature
            title="GO-MORE"
            img={require('./../../../assets/images/icon/go-more.png')}
          />
        </View>
        {/* End kota baris kedua */}
      </View>
    );
  }
}

export default HomeMainFeature;
