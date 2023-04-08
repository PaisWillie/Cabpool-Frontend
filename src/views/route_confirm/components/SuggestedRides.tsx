/* eslint-disable react-native/no-inline-styles */
import {Text} from '@rneui/themed';
import React, {useState} from 'react';
import {View} from 'react-native';
import RideOption from './RideOption';

const SuggestedRides = () => {
  const [selectedRide, setSelectedRide] = useState(0);

  return (
    <View
      style={{
        marginBottom: 16,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          marginBottom: 16,
        }}>
        SUGGESTED RIDES
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <RideOption
          riderFirstName="Willie"
          rating={4.98}
          TimeMinutesAway={5}
          profileImageURL="https://randomuser.me/api/portraits/men/36.jpg"
          selected={selectedRide === 0}
          setSelectedRide={() => setSelectedRide(0)}
        />
        <RideOption
          riderFirstName="Daniel"
          rating={4.95}
          TimeMinutesAway={3}
          profileImageURL="https://randomuser.me/api/portraits/men/66.jpg"
          selected={selectedRide === 1}
          setSelectedRide={() => setSelectedRide(1)}
        />
        <RideOption
          riderFirstName="Matt"
          rating={4.99}
          TimeMinutesAway={12}
          profileImageURL="https://randomuser.me/api/portraits/men/81.jpg"
          selected={selectedRide === 2}
          setSelectedRide={() => setSelectedRide(2)}
        />
      </View>
    </View>
  );
};

export default SuggestedRides;
