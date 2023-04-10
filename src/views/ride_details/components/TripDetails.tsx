/* eslint-disable react-native/no-inline-styles */
import {Button, Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import TripDetailsStop from './TripDetailsStop';

const TripDetails = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          TRIP
        </Text>
        <Button
          uppercase
          type="clear"
          containerStyle={{
            marginRight: -10,
          }}
          titleStyle={{
            fontWeight: 'bold',
            fontSize: 13,
          }}>
          Edit Ride
        </Button>
      </View>
      <TripDetailsStop
        isStart
        address="345 Cityhall Park"
        arrivalTime="9:40 PM"
      />
      <TripDetailsStop address="Picking up Alan" arrivalTime="9:45 PM" />
      <TripDetailsStop address="Dropping off Alan" arrivalTime="10:00 PM" />
      <TripDetailsStop isEnd address="Barclay Stadium" arrivalTime="10:10 PM" />
    </View>
  );
};

export default TripDetails;
