import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/views/home';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './src/views/login';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
