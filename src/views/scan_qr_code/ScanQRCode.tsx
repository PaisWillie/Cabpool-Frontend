/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Text} from '@rneui/base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const ScanQRCodePage = ({navigation}: any) => {
  const [taxiID, setTaxiID] = useState('');
  const [status, setStatus] = useState(false);

  const onSuccess = (e: any) => {
    console.log(`Scanned Taxi ID: ${e.data}`);
    setTaxiID(e.data);
    setStatus(true);
  };

  const handleSendOffer = () => {
    navigation.navigate('RideDetails');
  };

  return (
    <View>
      <View
        style={{
          position: 'absolute',
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
          <View
            style={{
              marginBottom: 24,
            }}>
            {status ? (
              <Text style={{fontWeight: 'bold', fontSize: 18, color: 'green'}}>
                Taxi ID Scanned: {taxiID}
              </Text>
            ) : (
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                Waiting for scan...
              </Text>
            )}
          </View>
          <Button
            uppercase
            size="lg"
            buttonStyle={{borderRadius: 10}}
            disabled={!status}
            onPress={handleSendOffer}>
            Send Offer
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ScanQRCodePage;
