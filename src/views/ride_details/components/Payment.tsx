/* eslint-disable react-native/no-inline-styles */
import {Button, Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';

const Payment = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          PAYMENT
        </Text>
        <Button
          uppercase
          type="clear"
          containerStyle={{
            marginRight: -10,
          }}
          titleStyle={{
            fontWeight: 'bold',
            fontSize: 13,
          }}>
          Split Cost
        </Button>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
        }}>
        CAD $26.95
      </Text>
    </View>
  );
};

export default Payment;
