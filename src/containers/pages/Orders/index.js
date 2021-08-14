import React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import Navbar from './../../../containers/organisms/NavBar';
import Header from './../../../components/molecules/Header';

const Orders = () => {
  return (
    <>
      <View
        style={{
          height: 54,
          flexDirection: 'column',
          backgroundColor: 'white',
          borderTopColor: '#e8e9ed',
          // borderTopWidth: 1,
          flex: 1,
        }}>
        <Header />
        <View
          style={{
            backgroundColor: '#ebebeb',
            flexDirection: 'row',
            width: '100%',
            borderColor: '#e8e9ed',
            borderBottomWidth: 1,
          }}>
          <TouchableOpacity
            // onPress={props.onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              height: 60,
              borderBottomWidth: 2,
              borderColor: '#540000',
              backgroundColor: '#ebebeb',
              // backgroundColor: props.active ? '#ebebeb' : 'white',
            }}>
            <View
              style={{
                height: 2,
                backgroundColor: '#540000',
                borderRadius: 26,
              }}></View>
            {/* <Image style={{height: 26, width: 26}} source={props.img}></Image> */}
            <Text
              style={{
                fontSize: 10,
                // color: props.active ? '#540000' : '#545454',
                marginTop: 4,
              }}>
              BERLANGSUNG
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={props.onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              height: 60,
              // borderTopWidth: props.active ? 2 : 0,
              borderColor: '#540000',
              // backgroundColor: props.active ? '#ebebeb' : 'white',
            }}>
            <View
              style={{
                height: 2,
                backgroundColor: '#540000',
                borderRadius: 26,
              }}></View>
            {/* <Image style={{height: 26, width: 26}} source={props.img}></Image> */}
            <Text
              style={{
                fontSize: 10,
                // color: props.active ? '#540000' : '#545454',
                marginTop: 4,
              }}>
              SELESAI
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Navbar />
    </>
  );
};

export default Orders;
