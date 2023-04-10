/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {View} from 'react-native';
import GoogleMaps from '../../components/GoogleMaps';
import {Divider, Text} from '@rneui/base';

const ChallengeStartPage = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-end',
      }}>
      <GoogleMaps />
      <BlurView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
        }}
        blurType="dark"
        blurAmount={32}
        reducedTransparencyFallbackColor="white"
      />
      <View
        id="information-card"
        style={{
          backgroundColor: 'white',
          flexDirection: 'column',
          elevation: 90,
          width: '100%',
          paddingHorizontal: 16,
          paddingVertical: 24,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Challenge</Text>
        <Divider style={{marginVertical: 12}} />
        <Text>Challenging other carpool riders to a coin flip!</Text>
        <Text>
          Winner receives the prize pool as a discount in their trip fare
        </Text>
        <Text>Cost to buy in: CAD $1.00</Text>
      </View>
    </View>
  );
};

export default ChallengeStartPage;
