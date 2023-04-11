/* eslint-disable react-native/no-inline-styles */
import {FAB, Icon} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';

type MenuProfileFloatingActionButtonsProps = {
  navigation: any;
};

const MenuProfileFloatingActionButtons = (
  props: MenuProfileFloatingActionButtonsProps,
) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingTop: 36,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }}>
      <FAB color="white">
        <Icon name="menu" type="feather" color="black" />
      </FAB>
      <FAB color="white" onPress={() => props.navigation.push('Profile')}>
        <Icon name="person-outline" type="ionicons" color="black" />
      </FAB>
    </View>
  );
};

export default MenuProfileFloatingActionButtons;
