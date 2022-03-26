import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import Home from '../uts_pam/src/screen/Home';
import Stack from './src/screen/Stack';
import Tab from './src/screen/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
};

export default App;
