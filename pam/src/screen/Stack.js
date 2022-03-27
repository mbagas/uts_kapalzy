import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import Confirm from './Confirm';
import Booking from './Booking';
import TicketDetail from './TicketDetail';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#11468F',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'KAPALZY',
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          title: 'KAPALZY',
        }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{
          title: 'KAPALZY',
        }}
      />
      <Stack.Screen
        name="TicketDetail"
        component={TicketDetail}
        options={{
          title: 'KAPALZY',
        }}
      />
    </Stack.Navigator>
  );
};

export default ScreenStack;
