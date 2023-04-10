/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import GoogleMaps from '../../components/GoogleMaps';
import {Button, Divider, Text} from '@rneui/base';
import TripDetails from './components/TripDetails';
import HowIsYourTrip from './components/HowIsYourTrip';
import CostTimeDetails from './components/CostTimeDetails';

const DisplayFarePage = ({navigation}: any) => {
  const [hasRating, setHasRating] = useState(false);

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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Button type="clear" disabled buttonStyle={{width: 50}} />
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            YOU ARRIVED
          </Text>
          <Button
            type="clear"
            buttonStyle={{width: 50}}
            onPress={() => navigation.navigate('DestinationSelect')}
            icon={{name: 'close', type: 'antdesign'}}
            iconContainerStyle={{marginRight: -16}}
          />
        </View>
        <Divider style={{marginVertical: 12}} />
        <CostTimeDetails finalCost={26.95} timeDuration="30m" />
        <Divider style={{marginVertical: 12}} />
        <TripDetails />
        <Divider style={{marginVertical: 12}} />
        <HowIsYourTrip setHasRating={setHasRating} />
        <Button
          size="lg"
          color="dodgerblue"
          uppercase
          disabled={!hasRating}
          titleStyle={{color: 'white', fontWeight: 'bold'}}
          onPress={() => {
            console.log('Pressed!');
            navigation.navigate('DestinationSelect');
          }}
          buttonStyle={{borderRadius: 10, width: '100%'}}>
          Submit
        </Button>
      </View>
    </View>
  );
};

export default DisplayFarePage;
