import React from 'react';
/* eslint-disable react-native/no-inline-styles */
import {Image, Text} from '@rneui/base';
import {View} from 'react-native';

type PassengersProps = {
  profileImageURLs: string[];
};

const Passengers = (props: PassengersProps) => {
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          marginBottom: 12,
        }}>
        PASSENGERS
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {props.profileImageURLs.map((url, index) => (
            <Image
              key={index}
              source={{
                uri: url,
              }}
              containerStyle={{
                width: 50,
                height: 50,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: 'white',
                zIndex: props.profileImageURLs.length - index,
                marginLeft: index === 0 ? 0 : -10,
              }}
            />
          ))}
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'grey',
          }}>
          You are {props.profileImageURLs.length} other people
        </Text>
      </View>
    </View>
  );
};

export default Passengers;
