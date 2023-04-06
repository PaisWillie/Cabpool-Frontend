import React from 'react';
import {View} from 'react-native';
import {FAB, Icon} from '@rneui/themed';

const RouteInputPage = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <FAB>
        <Icon name="menu" type="feather" />
      </FAB>
      <FAB>
        <Icon name="person-outline" type="Ionicons" />
      </FAB>
    </View>
  );
};

export default RouteInputPage;
