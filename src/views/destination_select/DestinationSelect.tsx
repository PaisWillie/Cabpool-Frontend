/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import MenuProfileFloatingActionButtons from '../../components/MenuProfileFloatingActionButtons';
import {Input} from '@rneui/base';
import GoogleMaps from '../../components/GoogleMaps';
import Geolocation from '@react-native-community/geolocation';
import {coordinate} from '../../types/MapsTypes';
import getDirections from '../../functions/getDirections';

const DestinationSelectPage = ({navigation}: any) => {
  const [destination, setDestination] = useState<string>('');
  const [start, setStart] = useState<coordinate>({latitude: 0, longitude: 0});

  const handleTextEntry = () => {
    Geolocation.getCurrentPosition(
      position => {
        setStart({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(position);
        console.log(destination);
        getDirections(
          // `${start.latitude}, ${start.longitude}`,
          '15 Cottrill St, Hamilton, ON, L8S 3L5',
          destination,
        ).then(res => {
          navigation.navigate('RouteConfirm', {
            // start: start,
            directions: res,
          });
        });
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'flex-end',
      }}>
      <GoogleMaps />
      <MenuProfileFloatingActionButtons />
      <Input
        placeholder="Where are you going?"
        onChangeText={setDestination}
        onSubmitEditing={handleTextEntry}
        inputContainerStyle={{
          borderBottomWidth: 0,
        }}
        leftIcon={{name: 'search', type: 'feather', color: 'dodgerblue'}}
        inputStyle={{
          marginLeft: 10,
        }}
        containerStyle={{
          backgroundColor: 'white',
          borderRadius: 15,
          marginBottom: 60,
          marginLeft: 20,
          width: '90%',
          height: 50,
          elevation: 5,
        }}
        leftIconContainerStyle={{
          marginLeft: 10,
        }}
      />
    </View>
  );
};

export default DestinationSelectPage;
