import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// import screens
import Favorites from '../screens/MainScreens/Favorites';
import Feed from '../screens/MainScreens/Feed';
import Message from '../screens/MainScreens/Message';
import Profile from '../screens/MainScreens/Profile';
import Publish from '../screens/MainScreens/Publish';

const MainNavigator = () => {
  const MainStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: false,
    style: {
      backgroundColor: '#e7e7de',
      paddingBottom: 12,
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName = 'home-outline';

      switch (route.name) {
        case 'Message':
          iconName = 'chatbox-outline';
          break;

        case 'Publish':
          iconName = 'add-outline';
          break;

        case 'Favorites':
          iconName = 'heart-outline';
          break;

        case 'Profile':
          iconName = 'ios-settings-sharp';
          break;

        case 'Feed':
        default:
          iconName = 'home-outline';
          break;
      }

      if (route.name === 'Publish') {
        return (
          <Ionicons
            name="ios-add-circle-outline"
            size={48}
            color="#0095F6"
            style={{
              shadowColor: '#0095F6',
              shadowOffset: { width: 0, height: 10 },
              shadowRadius: 10,
              shadowOpacity: 0.3,
            }}
          />
        );
      }

      return (
        <Ionicons
          name={iconName}
          size={24}
          color={focused ? '#00587a' : '#666666'}
        />
      );
    },
  });

  return (
    <MainStack.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}
    >
      <MainStack.Screen name="Feed" component={Feed} />
      <MainStack.Screen name="Message" component={Message} />
      <MainStack.Screen name="Publish" component={Publish} />
      <MainStack.Screen name="Favorites" component={Favorites} />
      <MainStack.Screen name="Profile" component={Profile} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
