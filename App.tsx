import React from 'react';
import AppNavigator from './src/navigator';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {COLORS} from './src/constants/styleVariables';
import {navigationRef} from './src/services/NavigationService';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.BACKGROUND,
  },
};
const App = () => {
  return (
    <NavigationContainer theme={MyTheme} ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
