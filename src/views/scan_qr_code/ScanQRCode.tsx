/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '@rneui/base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const ScanQRCodePage = ({navigation}: any) => {
  const onSuccess = (e: any) => {
    console.log(e.data);
  };

  return (
    <View>
      <View
        style={{
          position: 'absolute',

          // Add a black border on the corners of the view
          borderColor: 'black',
          borderWidth: 3,
          borderRadius: 15,

          width: '90%',
          height: '54%',
          top: '26%',
          left: '5%',
        }}
      />
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        cameraStyle={{
          width: '70%',
        }}
        cameraType="back"
        containerStyle={{
          position: 'absolute',
          top: '30%',
          left: '15%',
        }}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          paddingTop: 64,
          paddingHorizontal: 12,
          paddingBottom: 12,
        }}>
        <View>
          <View style={{justifyContent: 'flex-start'}}>
            <Button
              type="clear"
              buttonStyle={{width: 40}}
              onPress={() => navigation.goBack()}
              icon={{name: 'close', type: 'antdesign'}}
              iconContainerStyle={{marginLeft: -16}}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              marginTop: 36,
            }}>
            Scan your Taxi's QR Code
          </Text>
        </View>
        <View>
          <Text>Status</Text>
          <Button uppercase size="lg" buttonStyle={{borderRadius: 10}}>
            Confirm
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ScanQRCodePage;
