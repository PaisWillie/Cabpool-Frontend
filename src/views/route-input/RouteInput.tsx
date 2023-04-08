/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Button} from '@rneui/themed';
import RouteLocations from './components/RouteLocations';
import SuggestedRides from './components/SuggestedRides';
import Payment from './components/Payment';
<<<<<<< HEAD
import MenuProfileFloatingActionButtons from '../../components/MenuProfileFloatingActionButtons';
=======
import FloatingActionButtons from './components/FloatingActionButtons';
>>>>>>> 915ab11 (Moved action buttons to components)

const RouteInputPage = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
      }}>
      <MenuProfileFloatingActionButtons />
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
