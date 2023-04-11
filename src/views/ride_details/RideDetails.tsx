/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import GoogleMaps from '../../components/GoogleMaps';
import {Button, Divider, Text} from '@rneui/base';
import TripDetails from './components/TripDetails';
import PaymentDetails from './components/PaymentDetails';
import DesignatedRiderDetails from './components/DesignatedRiderDetails';
import Passengers from './components/Passengers';

const RideDetailsPage = ({navigation}: any) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-end',
      }}>
      <GoogleMaps />
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
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          Your taxi is coming in 2:35
        </Text>
        <Divider style={{marginVertical: 12}} />
        <DesignatedRiderDetails
          profileImageURL="https://randomuser.me/api/portraits/men/36.jpg"
          rating={4.95}
          timeAway={3}
          name="Willie Pai"
        />
        <Divider style={{marginVertical: 12}} />
        <Passengers
          profileImageURLs={[
            'https://randomuser.me/api/portraits/men/40.jpg',
            'https://randomuser.me/api/portraits/men/41.jpg',
            'https://randomuser.me/api/portraits/women/25.jpg',
          ]}
        />
        <Divider style={{marginVertical: 12}} />
        <TripDetails />
        <Divider style={{marginVertical: 12}} />
        <PaymentDetails cost={26.95} discount={6.05} />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}>
          <Button
            size="lg"
            type="outline"
            icon={{
              name: 'dice',
              type: 'font-awesome-5',
              color: 'dodgerblue',
            }}
            onPress={() => {
              navigation.navigate('ChallengeStart');
            }}
            buttonStyle={{
              borderRadius: 10,
              marginTop: 48,
              width: '60%',
              borderWidth: 1,
              borderColor: 'dodgerblue',
            }}
          />
          <Button
            size="lg"
            color="lavender"
            titleStyle={{color: 'black', fontWeight: 'bold'}}
            onPress={() => {
              navigation.navigate('DisplayFare');
            }}
            buttonStyle={{borderRadius: 10, marginTop: 48, width: '100%'}}>
            Cancel
          </Button>
        </View>
      </View>
    </View>
  );
};

export default RideDetailsPage;
