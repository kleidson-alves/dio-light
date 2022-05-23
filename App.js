import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

import lightOff from './src/assets/eco-light-off.png';
import lightOn from './src/assets/eco-light.png';
import dioWhite from './src/assets/logo-dio-white.png';
import dio from './src/assets/logo-dio.png';

const App = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(old => !old);
    });

    return subscription.remove();
  }, []);

  return (
    <View style={toggle ? style.container : style.containerDark}>
      <TouchableOpacity onPress={() => setToggle(!toggle)}>
        <Image
          source={toggle ? lightOn : lightOff}
          style={toggle ? style.lightinOn : style.lightinOff}
        />
        <Image source={toggle ? dio : dioWhite} style={style.logoDio} />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerDark: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightinOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightinOff: {
    tintColor: '#fff',
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  logoDio: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
