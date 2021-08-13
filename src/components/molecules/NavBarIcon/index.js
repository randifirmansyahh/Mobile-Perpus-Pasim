import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const NavBarIcon = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: props.active ? 2 : 0,
        borderColor: '#540000',
        backgroundColor: props.active ? '#ebebeb' : 'white',
      }}>
      <View
        style={{
          height: 2,
          backgroundColor: '#540000',
          borderRadius: 26,
        }}></View>
      <Image style={{height: 26, width: 26}} source={props.img}></Image>
      <Text
        style={{
          fontSize: 10,
          color: props.active ? '#540000' : '#545454',
          marginTop: 4,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default NavBarIcon;
