/* eslint-disable react-native/no-inline-styles */
import {Button, Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import Payment from '../../../components/Payment';

type PaymentDetailsProps = {
  cost: number;
  discount: number;
};

const PaymentDetails = (props: PaymentDetailsProps) => {
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
          fontSize: 22,
        }}>
        CAD ${props.cost}
      </Text>
      <Text
        style={{
          color: 'grey',
        }}>
        Your fare may be lowered as riders join your ride.
      </Text>
      <Text
        style={{
          color: 'grey',
          marginBottom: 20,
        }}>
        You have saved CAD ${props.discount} compared to a regular taxi.
      </Text>
      <Payment lastFourDigits={5682} expirationDate="10/25" />
    </View>
  );
};

export default PaymentDetails;
