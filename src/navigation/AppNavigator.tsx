import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

interface RootState {
  user: {
    isLogged: boolean;
  };
}

const AppNavigator = () => {
  const TabStack = createStackNavigator();

  const { user } = useSelector((state: RootState) => state);

  return (
    <TabStack.Navigator headerMode="none">
      {user.isLogged ? (
        <TabStack.Screen name="Main" component={MainNavigator} />
      ) : (
        <TabStack.Screen name="Auth" component={AuthNavigator} />
      )}
    </TabStack.Navigator>
  );
};

export default AppNavigator;
