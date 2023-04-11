import React, {useRef, useState} from 'react';
import {View, Animated, StyleSheet, Dimensions, Image} from 'react-native';
import {Button, Divider, Text} from '@rneui/base';

const windowHeight = Dimensions.get('window').height;

const ChallengeResult = ({navigation}: any) => {
  const animationValue = useRef(new Animated.Value(0)).current;
  const [hasFlipped, setHasFlipped] = useState(false);
  const [showFareMessage, setShowFareMessage] = useState(false);

  const startAnimation = () => {
    setHasFlipped(true);
    Animated.sequence([
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setShowFareMessage(true);
    });
  };

  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -(windowHeight * 0.5)],
  });

  const rotation = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const opacityOriginal = animationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
  });

  const opacityRed = animationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        {showFareMessage && (
          <Text style={styles.fareMessage}>
            Congratulations! Your ride fare has been lowered by $1
          </Text>
        )}
        {showFareMessage && (
          <Button
            style={styles.returnButton}
            title="Return Home"
            onPress={() => navigation.navigate('RideDetails')}
            radius="15"
          />
        )}
      </View>
      <Animated.View
        style={[
          styles.coin,
          {
            transform: [{translateY}, {rotateX: rotation}],
          },
        ]}>
        <Animated.Image
          style={[styles.image, {opacity: opacityOriginal}]}
          source={require('../../../assets/coinImg_green.png')}
        />
        <Animated.Image
          style={[styles.image, {opacity: opacityRed}]}
          source={require('../../../assets/coinImg_red.png')}
        />
      </Animated.View>
      <View style={styles.coinContainer}>
        {!hasFlipped && (
          <Button title="FLIP COIN" onPress={startAnimation} radius="15" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: windowHeight * 0.1,
  },
  coin: {
    width: 100,
    height: 100,
    marginBottom: windowHeight * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  coinContainer: {
    marginBottom: 20,
  },
  fareMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  returnButton: {
    marginBottom: 100,
  },
});

export default ChallengeResult;
