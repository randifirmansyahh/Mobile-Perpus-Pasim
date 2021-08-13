import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoBanner = () => {
  return (
    <View
      style={{
        paddingBottom: 16,
        paddingHorizontal: 16,
        borderBottomColor: '#e8e9ed',
        borderBottomWidth: 1,
      }}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/images/dummy/food-banner.jpg')}
          style={{height: 170, width: '100%', borderRadius: 8}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.2,
            borderRadius: 8,
          }}></View>
        <View
          style={{
            height: 15,
            width: 55,
            position: 'absolute',
            top: 10,
            left: 16,
          }}>
          {/* harusnya image tapi nge close mulu */}
          <Text style={{color: 'white', fontWeight: 'bold'}}>GOFOOD</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <View style={{flex: 1, paddingLeft: 12}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 16,
              }}>
              FREE GO-FOOD VOUCEHER
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: 'white',
              }}>
              Quick, before they run out!
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#51a756',
                borderRadius: 4,
                alignSelf: 'stretch',
                marginTop: 16,
              }}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: 'white',
                  paddingHorizontal: 12,
                  paddingVertical: 11,
                  textAlign: 'center',
                }}>
                GET VOUCHER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GoBanner;
