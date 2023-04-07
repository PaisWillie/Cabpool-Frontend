/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Button, FAB, Icon, Text} from '@rneui/themed';
import RouteLocations from './components/RouteLocations';
import SuggestedRides from './components/SuggestedRides';
import Payment from './components/Payment';

const RouteInputPage = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <FAB color="white">
          <Icon name="menu" type="feather" color="black" />
        </FAB>
        <FAB color="white">
          <Icon name="person-outline" type="Ionicons" color="white" />
        </FAB>
      </View>
      <View
        id="information-card"
        style={{
          backgroundColor: 'white',
          flexDirection: 'column',
          width: '100%',
          paddingHorizontal: 12,
          paddingVertical: 24,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <RouteLocations />
        <SuggestedRides />
        <Payment />
        <Button
          uppercase
          size="lg"
          buttonStyle={{borderRadius: 10, marginTop: 12}}>
          Book Now
        </Button>
      </View>
    </View>
  );
};

export default RouteInputPage;
