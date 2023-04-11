/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Button} from '@rneui/themed';
import RouteLocations from './components/RouteLocations';
import SuggestedRides from './components/SuggestedRides';
import Payment from '../../components/Payment';
import MenuProfileFloatingActionButtons from '../../components/MenuProfileFloatingActionButtons';
import GoogleMaps from '../../components/GoogleMaps';

const RouteConfirmPage = ({navigation, route}: any) => {
  const handleBookNow = () => {
    navigation.navigate('RideDetails');
  };

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
          paddingHorizontal: 16,
          paddingVertical: 24,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View style={{justifyContent: 'flex-start'}}>
          <Button
            size="sm"
            type="clear"
            containerStyle={{marginBottom: 12, marginTop: -12, width: '17%'}}
            titleStyle={{
              color: 'tomato',
            }}
            onPress={() => navigation.goBack()}>
            Cancel
          </Button>
        </View>
        <RouteLocations destination={route.params?.destination} />
        <SuggestedRides />
        <Payment lastFourDigits={5682} expirationDate="10/25" />
        <Button
          uppercase
          size="lg"
          buttonStyle={{borderRadius: 10, marginTop: 12}}
          onPress={handleBookNow}>
          Book Now
        </Button>
      </View>
      <MenuProfileFloatingActionButtons navigation={navigation} />
    </View>
  );
};

export default RouteConfirmPage;
