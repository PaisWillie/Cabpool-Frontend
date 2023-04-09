/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Divider, Icon, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

type RouteLocationsProps = {
  destination: string;
};

const RouteLocations = (props: RouteLocationsProps) => {
  return (
    <View
      id="route-locations"
      style={{
        flexDirection: 'row',
        marginBottom: 24,
      }}>
      <View
        style={{
          height: '100%',
          alignContent: 'space-between',
          marginTop: -2,
          marginRight: 24,
          marginLeft: 12,
        }}>
        <Icon name="location-pin" color="dodgerblue" />
        <Icon name="location-pin" style={{marginTop: 27}} />
      </View>
      <View
        id="location-names"
        style={{
          flexDirection: 'column',
          width: '100%',
        }}>
        <Text style={styles.text}>{props.destination}</Text>
        <Divider width={1} style={{width: '80%', marginVertical: 16}} />
        <Text style={styles.text}>Your location</Text>
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
