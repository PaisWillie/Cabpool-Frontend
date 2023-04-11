import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './src/views/login';
import RouteConfirmPage from './src/views/route_confirm';
import RegistrationPage from './src/views/registration';
import DestinationSelectPage from './src/views/destination_select';
import RideDetailsPage from './src/views/ride_details';
import DisplayFarePage from './src/views/display_fare';
import ScanQRCodePage from './src/views/scan_qr_code';
import ProfilePage from './src/views/profile';
import ChallengeStartPage from './src/views/challenge';
import ChallengeRequestPage from './src/views/challenge/challenge_request';
import ChallengeResultPage from './src/views/challenge/challenge_result';
import ChallengeIneligibilityPage from './src/views/challenge/challenge_ineligibility';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  statusBarTranslucent: true,
};

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="DestinationSelect"
          component={DestinationSelectPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={screenOptions}
        />
        <Stack.Screen
          name="ScanQRCode"
          component={ScanQRCodePage}
          options={screenOptions}
        />
        <Stack.Screen
          name="RouteConfirm"
          component={RouteConfirmPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="RideDetails"
          component={RideDetailsPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="ChallengeStart"
          component={ChallengeStartPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="ChallengeRequest"
          component={ChallengeRequestPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="ChallengeResult"
          component={ChallengeResultPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="ChallengeIneligibility"
          component={ChallengeIneligibilityPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="DisplayFare"
          component={DisplayFarePage}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
