/* eslint-disable react-native/no-inline-styles */
import {Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import RateRider from './RateRider';

type HowIsYourTripProps = {
  setHasRating: (hasRating: boolean) => void;
};

const HowIsYourTrip = (props: HowIsYourTripProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          marginTop: 12,
          fontSize: 15,
        }}>
        HOW WAS YOUR RIDERS?
      </Text>
      <Text
        style={{
          color: 'grey',
          marginTop: 12,
          width: '75%',
          textAlign: 'center',
        }}>
        Your feedback will help us improve carpool experience better for you and
        other riders.
      </Text>
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          marginTop: 24,
          marginBottom: 48,
        }}>
        <RateRider
          name="Willie"
          profileImageURL="https://randomuser.me/api/portraits/men/36.jpg"
          setHasRating={props.setHasRating}
        />
        <RateRider
          name="Arash"
          profileImageURL="https://randomuser.me/api/portraits/men/40.jpg"
          setHasRating={props.setHasRating}
        />
        <RateRider
          name="Waleed"
          profileImageURL="https://randomuser.me/api/portraits/men/41.jpg"
          setHasRating={props.setHasRating}
        />
        <RateRider
          name="Sophia"
          profileImageURL="https://randomuser.me/api/portraits/women/25.jpg"
          setHasRating={props.setHasRating}
        />
      </View>
    </View>
  );
};

export default HowIsYourTrip;
