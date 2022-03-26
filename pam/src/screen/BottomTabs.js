import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Stack from './Stack';
import Tickets from './Tickets';
import Cancellations from './Cancellations';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName={'HomePage'}>
      <Tab.Screen
        name="HomePage"
        component={Stack}
        tabBarLabel="HomePage"
        color="#11468F"
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="home" size={22} color="#11468F" />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        tabBarLabel="Tickets"
        color="#11468F"
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="receipt" size={22} color="#11468F" />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cancellations"
        component={Cancellations}
        tabBarLabel="Cancellations}"
        color="#11468F"
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="receipt" size={22} color="#11468F" />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
