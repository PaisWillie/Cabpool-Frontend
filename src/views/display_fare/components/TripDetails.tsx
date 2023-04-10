/* eslint-disable react-native/no-inline-styles */
import {Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import TripDetailsStop from '../../../components/TripDetailsStop';

const TripDetails = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          TRIP
        </Text>
      </View>
      <TripDetailsStop
        isStart
        address="345 Cityhall Park"
        arrivalTime="9:40 PM"
      />
      <TripDetailsStop isEnd address="Barclay Stadium" arrivalTime="10:10 PM" />
    </View>
  );
};

export default TripDetails;
