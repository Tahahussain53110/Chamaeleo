import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from '../screens/Home';
import { COLORS, ICONS } from '../constants';
import Events from '../screens/Events';
import Bookings from '../screens/Bookings';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';

interface IRenderTabBarIcon {
  route: any;
  color: string;
  size: number;
}

export const BottomTabs = () => {
  const Tabs = createBottomTabNavigator();
  const renderTabBarIcon = ({ route, color, size }: IRenderTabBarIcon) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Notification') {
      iconName = 'notifications';
    } else if (route.name === 'Bookings') {
      iconName = 'ticket';
      return (
        <View style={styles.tabStyle}>
          <Text>
            <ICONS.Ionicons name={iconName} size={40} color={color} />
          </Text>
        </View>
      );
    } else if (route.name === 'Profile') {
      iconName = 'person';
    } else if (route.name === 'Events') {
      iconName = 'desktop-outline';
    }
    return (
      <Text>
        <ICONS.Ionicons name={iconName} size={25} color={color} />
      </Text>
    );
  };
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) =>
          renderTabBarIcon({ route, color, size }),
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
      })}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Events"
        component={Events}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Bookings"
        component={Bookings}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    position: 'absolute',
    bottom: 0, // space from bottombar
    height: 68,
    width: 68,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
