/* eslint-disable react-native/no-inline-styles */
import {Icon, Image, Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';

type DesignatedRiderDetailsProps = {
  profileImageURL: string;
  rating: number;
  name: string;
  timeAway: number;
};

const DesignatedRiderDetails = (props: DesignatedRiderDetailsProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
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
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 12,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            {props.name.toUpperCase()}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
            }}>
            <Icon
              name="location"
              type="evilicon"
              size={16}
              style={{marginTop: 3}}
              color="grey"
            />
            <Text
              style={{
                color: 'grey',
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              {' '}
              {props.timeAway} mins
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
            }}>
            <Icon
              name="star"
              type="font-awesome"
              size={12}
              style={{marginTop: 3, marginLeft: 2, marginRight: 3}}
              color="gold"
            />
            <Text
              style={{
                color: 'grey',
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              {' '}
              {props.rating}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'grey',
            }}>
            Plate # •{' '}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
            }}>
            BSJG 234
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'grey',
            }}>
            Taxi ID •{' '}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
            }}>
            824-231
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DesignatedRiderDetails;
