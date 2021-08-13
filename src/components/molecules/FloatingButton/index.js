import React from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  Image,
  Linking,
  Animated,
  PanResponder,
  useEffect,
  LogBox,
} from 'react-native';

const linkBukuPop = () => {
  Linking.openURL(
    'whatsapp://send?text=Halo, Saya butuh bantuan !&phone=6285156061121',
  );
};

const askSee = () => {
  Alert.alert('Bantuan', 'Ingin mendapat bantuan lebih lanjut ?', [
    {
      text: 'Tidak',
    },
    {
      text: 'Ya',
      onPress: () => linkBukuPop(),
    },
  ]);
};

const FloatingButton = () => {
  const a = () => {
    useEffect(() => {
      LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, []);
  };

  LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

  let pan = new Animated.ValueXY();
  let panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan,
        {toValue: {x: 0, y: 0}},
        {
          useNativeDriver: false,
        },
      ).start();
    },
  });

  return (
    <Animated.View
      style={{
        transform: [{translateX: pan.x}, {translateY: pan.y}],
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#540000',
        position: 'absolute',
        bottom: 80,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...panResponder.panHandlers}>
      <TouchableOpacity
        onPress={() => askSee()}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/images/icon/headphone.png')}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default FloatingButton;
