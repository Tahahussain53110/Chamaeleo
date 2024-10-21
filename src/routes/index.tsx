import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { isReadyRef } from './rootNavigation';
import { RouteList, initialRouteName } from './routesList';
import EventsContextContainer from '../context/eventContext';

const Stack = createStackNavigator();
export class Routes extends Component {
  render() {
    return (
      <EventsContextContainer>
        <NavigationContainer
          ref={() => {
            isReadyRef.current = true;
          }}>
          <Stack.Navigator initialRouteName={initialRouteName}>
            {RouteList.map((route, index) => (
              <Stack.Screen
                key={index}
                name={route.name}
                component={route.component}
                options={{ headerShown: false }}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </EventsContextContainer>
    );
  }
}

export default Routes;
