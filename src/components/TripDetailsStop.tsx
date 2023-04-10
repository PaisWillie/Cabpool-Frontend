/* eslint-disable react-native/no-inline-styles */
import {Icon, Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';

type TripDetailsStopProps = {
  isStart?: boolean;
  isEnd?: boolean;
  address: string;
  arrivalTime: string;
};

const TripDetailsStop = (props: TripDetailsStopProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Icon
          name="location-pin"
          color={props.isStart ? 'dodgerblue' : 'black'}
          size={props.isStart || props.isEnd ? 24 : 22}
          style={{
            marginLeft: props.isStart || props.isEnd ? 0 : 0.5,
            marginRight: 8,
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          {props.address}
        </Text>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          color: props.isStart || props.isEnd ? 'black' : 'grey',
        }}>
        {props.arrivalTime}
      </Text>
    </View>
  );
};

export default TripDetailsStop;
