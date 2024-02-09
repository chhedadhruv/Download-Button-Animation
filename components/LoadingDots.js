import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const LoadingDots = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Animatable.View
        animation="bounceIn"
        iterationCount="infinite"
        direction="alternate"
        duration={1000}
        style={{ width: 10, height: 10, backgroundColor: 'lightblue', borderRadius: 5, marginRight: 5, transform: [{ translateY: 5 }] }}
      />
      <Animatable.View
        animation="bounceIn"
        iterationCount="infinite"
        direction="alternate"
        duration={1000}
        delay={100}
        style={{ width: 10, height: 10, backgroundColor: 'lightblue', borderRadius: 5, marginRight: 5, transform: [{ translateY: 5 }] }}
      />
      <Animatable.View
        animation="bounceIn"
        iterationCount="infinite"
        direction="alternate"
        duration={1000}
        delay={200}
        style={{ width: 10, height: 10, backgroundColor: 'lightblue', borderRadius: 5, transform: [{ translateY: 5 }] }}
      />
    </View>
  );
};

export default LoadingDots;
