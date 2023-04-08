import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/views/home';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './src/views/login';
import RouteInputPage from './src/views/route-input';
import RegistrationPage from './src/views/registration';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
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
          name="RouteInput"
          component={RouteInputPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
