/* eslint-disable react-native/no-inline-styles */
import {Button, Image, Text} from '@rneui/base';
import React, {useState} from 'react';
import {View} from 'react-native';

type RateRiderProps = {
  profileImageURL: string;
  name: string;
  setHasRating: (hasRating: boolean) => void;
};

const RateRider = (props: RateRiderProps) => {
  const [rating, setRating] = useState(0);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: props.profileImageURL,
          }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            marginLeft: 12,
          }}>
          {props.name.toUpperCase()}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <Button
              key={index}
              type="clear"
              containerStyle={{
                width: 30,
              }}
              buttonStyle={{
                marginHorizontal: -15,
              }}
              icon={{
                name: 'star',
                color: rating >= item ? 'gold' : 'lightgrey',
                size: 26,
              }}
              onPress={() => {
                setRating(item);
                props.setHasRating(true);
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default RateRider;
