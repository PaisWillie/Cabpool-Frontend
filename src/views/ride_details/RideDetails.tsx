/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import GoogleMaps from '../../components/GoogleMaps';
import {BlurView} from '@react-native-community/blur';
import {Button, Divider, Text} from '@rneui/base';
import TripDetails from './components/TripDetails';
import Payment from './components/Payment';
import DesignatedRiderDetails from './components/DesignatedRiderDetails';

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
        <TripDetails />
        <Divider style={{marginVertical: 12}} />
        <Payment />
        <Button
          size="lg"
          color="aliceblue"
          type="outline"
          titleStyle={{color: 'black', fontWeight: 'bold'}}
          onPress={() => {
            console.log('Pressed!');
            navigation.navigate('DestinationSelect');
          }}
          buttonStyle={{borderRadius: 10, marginTop: 12}}>
          Cancel
        </Button>
      </View>
    </View>
  );
};

export default RideDetailsPage;
