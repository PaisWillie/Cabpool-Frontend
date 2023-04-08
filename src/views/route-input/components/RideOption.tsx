/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Icon, Image} from '@rneui/base';
import {Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

// Add props type

type RideOptionProps = {
  riderFirstName: string;
  TimeMinutesAway: number;
  rating: number;
  profileImageURL: string;
  selected?: boolean;
  setSelectedRide: () => void;
};

const RideOption = (props: RideOptionProps) => {
  return (
    <Button
      onPress={props.setSelectedRide}
      buttonStyle={{
        flexDirection: 'column',
        backgroundColor: props.selected ? 'dodgerblue' : 'ghostwhite',
        paddingVertical: 10,
        borderRadius: 10,
      }}
      containerStyle={{
        width: '30%',
      }}>
      <Image
        source={{
          uri: props.profileImageURL,
        }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          marginBottom: 10,
        }}
      />
      <View>
        <Text
          style={props.selected ? styles.selectedTextName : styles.textName}>
          {props.riderFirstName}
        </Text>
        <Text
          style={
            props.selected
              ? styles.selectedTextDescription
              : styles.textDescription
          }>
          {props.TimeMinutesAway} min away
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
          }}>
          <Text
            style={
              props.selected
                ? styles.selectedTextDescription
                : styles.textDescription
            }>
            {props.rating}
          </Text>
          <Icon
            name="star"
            type="font-awesome"
            size={12}
            style={{marginTop: 3}}
            color="gold"
          />
        </View>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  textName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  textDescription: {
    color: 'black',
  },
  selectedTextName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  selectedTextDescription: {
    color: 'white',
  },
});

export default RideOption;
