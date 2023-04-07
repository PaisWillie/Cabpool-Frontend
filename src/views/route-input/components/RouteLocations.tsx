/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Icon, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

const RouteLocations = () => {
  return (
    <View
      id="route-locations"
      style={{
        flexDirection: 'row',
      }}>
      <View>
        <Icon name="location-pin" />
      </View>
      <View
        id="location-names"
        style={{
          flexDirection: 'column',
        }}>
        <Text style={styles.text}>345 Cityhall Park</Text>
        <Text style={styles.text}>Barclay Stadium</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
});

export default RouteLocations;
