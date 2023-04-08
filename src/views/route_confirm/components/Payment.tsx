/* eslint-disable react-native/no-inline-styles */
import {Button, Icon, Text} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';

const Payment = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
      }}>
      <Button
        color="ghostwhite"
        type="outline"
        size="lg"
        icon={<Icon name="cc-visa" type="font-awesome-5" color="dodgerblue" />}
        iconPosition="left"
        iconContainerStyle={{
          backgroundColor: 'white',
        }}
        containerStyle={{
          flex: 1,
        }}
        buttonStyle={{
          borderRadius: 10,
          paddingHorizontal: 24,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingLeft: 12,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>•••• 1234</Text>
          <Icon name="chevron-right" type="feather" color="black" />
        </View>
      </Button>
      <Button
        color="white"
        type="outline"
        size="lg"
        icon={
          <Icon
            name="brightness-percent"
            type="material-community"
            color="black"
          />
        }
        containerStyle={{
          marginLeft: 10,
        }}
        buttonStyle={{
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default Payment;
