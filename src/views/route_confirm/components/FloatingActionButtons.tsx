/* eslint-disable react-native/no-inline-styles */
import {FAB, Icon} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';

const FloatingActionButtons = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        marginTop: 12,
      }}>
      <FAB color="white">
        <Icon name="menu" type="feather" color="black" />
      </FAB>
      <FAB color="white">
        <Icon name="person-outline" type="ionicons" color="black" />
      </FAB>
    </View>
  );
};

export default FloatingActionButtons;
