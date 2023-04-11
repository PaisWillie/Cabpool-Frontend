/* eslint-disable react-native/no-inline-styles */
import {Button, Image, Text} from '@rneui/base';
import React, {useState} from 'react';
import {View} from 'react-native';
import Fields from './components/Fields';

const ProfilePage = ({navigation}: any) => {
  const [editMade, setEditMade] = useState(false);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        paddingTop: 64,
        paddingHorizontal: 12,
        paddingBottom: 12,
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <Button
            type="clear"
            onPress={() => navigation.goBack()}
            icon={{name: 'close', type: 'antdesign'}}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            My Profile
          </Text>
          <Button
            type="clear"
            disabled
            onPress={() => navigation.goBack()}
            icon={{name: 'close', type: 'antdesign', color: 'transparent'}}
          />
        </View>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/24.jpg'}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginTop: 36,
          }}
        />
        <Fields setEditMade={setEditMade} />
        <Button
          uppercase
          size="lg"
          disabled={!editMade}
          buttonStyle={{
            borderRadius: 10,
            marginTop: 24,
          }}>
          Save Changes
        </Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 24,
          marginHorizontal: 12,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'grey',
          }}>
          Joined{' '}
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
          }}>
          11 Apr 2023
        </Text>
      </View>
    </View>
  );
};

export default ProfilePage;
