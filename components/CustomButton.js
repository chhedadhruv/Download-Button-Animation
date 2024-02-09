import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import LoadingDots from './LoadingDots';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ConfettiCannon from 'react-native-confetti-cannon';
import * as Animatable from 'react-native-animatable';

const CustomButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setIsClicked(false);
      }, 3000);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setIsLoading(true);
          handleButtonClick();
        }}
        disabled={isClicked}
      >
        {isSuccess ? (
          <Animatable.View animation="fadeIn" style={styles.buttonContent}>
            <Icon name="check" size={30} color="green" />
            <Text style={styles.text}>Success</Text>
          </Animatable.View>
        ) : isClicked ? (
          <Animatable.View animation="slideOutDown" iterationCount={1} style={styles.buttonContent}>
            <Animatable.View animation="fadeOut" iterationCount={1} delay={0} style={{ position: 'absolute' }}>
                <Icon name="arrow-downward" size={30} color="lightblue" />
            </Animatable.View>
            <Text style={styles.text}>Submit</Text>
          </Animatable.View>
        ) : (
          <View style={styles.buttonContent}>
            <Icon name="arrow-downward" size={30} color="lightblue" />
            <Text style={styles.text}>Submit</Text>
          </View>
        )}
        {isLoading && (
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                <LoadingDots />
            </View>
        )
        }
      </TouchableOpacity>
      {isSuccess && (
        <Animatable.View animation="bounceIn" style={styles.confettiContainer}>
          <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} colors={['blue', 'darkblue', 'purple']} />
        </Animatable.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 35,
    width: 200,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 20,
  },
  confettiContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default CustomButton;
