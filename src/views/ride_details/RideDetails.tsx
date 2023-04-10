/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import GoogleMaps from '../../components/GoogleMaps';
import {BlurView} from '@react-native-community/blur';
import {Button, Divider, Text} from '@rneui/base';
import TripDetails from './components/TripDetails';
import PaymentDetails from './components/PaymentDetails';
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
              console.log('Pressed!');
              navigation.navigate('DestinationSelect');
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
            // type="outline"
            titleStyle={{color: 'black', fontWeight: 'bold'}}
            onPress={() => {
              console.log('Pressed!');
              navigation.navigate('DestinationSelect');
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
