import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import SignIn from '../screens/AuthScreens/SignIn';
import SignUp from '../screens/AuthScreens/SignUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={SignIn} />
        <Stack.Screen name="Notifications" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
