import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import GoogleMaps from '../../components/GoogleMaps';
import {Button, Divider, Text} from '@rneui/base';

const ChallengeStartPage = ({navigation}: any) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-end',
      }}>
      <GoogleMaps />
      <View
        id="information-card"
        style={{
          backgroundColor: 'white',
          elevation: 90,
          width: '100%',
          paddingHorizontal: 16,
          paddingVertical: 24,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Challenge</Text>
          <Button
            title="Start Game"
            radius={10}
            onPress={() => {
              navigation.navigate('ChallengeResult');
            }}
          />
        </View>
        <Divider />
        <View style={{marginTop: 12}}>
          <Text>Challenging other carpool riders to a coin flip!</Text>
          <Text>
            Winner receives the prize pool as a discount in their trip fare
          </Text>
          <Text>Cost to buy in: CAD $1.00</Text>
        </View>
      </View>
    </View>
  );
};

export default ChallengeStartPage;
