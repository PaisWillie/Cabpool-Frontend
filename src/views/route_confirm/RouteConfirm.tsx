/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Button} from '@rneui/themed';
import RouteLocations from './components/RouteLocations';
import SuggestedRides from './components/SuggestedRides';
import Payment from './components/Payment';
import MenuProfileFloatingActionButtons from '../../components/MenuProfileFloatingActionButtons';
import GoogleMaps from '../../components/GoogleMaps';

const RouteConfirmPage = ({navigation, route}: any) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-end',
      }}>
      <GoogleMaps
        currentLocation={route.params?.start}
        directions={route.params?.directions}
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
        <View style={{justifyContent: 'flex-start'}}>
          <Button
            size="sm"
            type="clear"
            containerStyle={{marginBottom: 12, marginTop: -12, width: '16%'}}
            titleStyle={{
              color: 'tomato',
            }}
            onPress={() => navigation.goBack()}>
            Cancel
          </Button>
        </View>
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
