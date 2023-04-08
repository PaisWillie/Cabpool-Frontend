import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './src/views/login';
import RouteConfirmPage from './src/views/route_confirm';
import RegistrationPage from './src/views/registration';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RouteConfirm"
          component={RouteConfirmPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
