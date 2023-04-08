/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Button} from '@rneui/themed';
import RouteLocations from './components/RouteLocations';
import SuggestedRides from './components/SuggestedRides';
import Payment from './components/Payment';
import MenuProfileFloatingActionButtons from '../../components/MenuProfileFloatingActionButtons';
import GoogleMaps from '../../components/GoogleMaps';

const RouteConfirmPage = ({route}: any) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-end',
      }}>
      <GoogleMaps
        currentLocation={route.params.start}
        directions={route.params.directions}
      />
      <View
        id="information-card"
        style={{
          backgroundColor: 'white',
          flexDirection: 'column',
          elevation: 90,
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
      <MenuProfileFloatingActionButtons />
    </View>
  );
};

export default RouteConfirmPage;
