import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import MainStack from './MainStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import OtherScreen from '../screens/OtherScreen';
import CustomHeader from './CustomHeader';
import {COLORS} from '../style/styleVariables';

type AppParamList = {
  AuthStack: undefined;
  MainStack: undefined;
  Main: undefined;
};

export type AppNavigationProp = StackNavigationProp<
  AppParamList,
  keyof AppParamList
>;
export type AppRouteProp<T extends keyof AppParamList> = RouteProp<
  AppParamList,
  T
>;
const Stack = createStackNavigator<AppParamList>();
const DrawerNavigator = createDrawerNavigator();

const Main = React.memo(() => {
  return (
    <DrawerNavigator.Navigator
      drawerType="slide"
      drawerContent={props => <CustomDrawer {...props} />}>
      <DrawerNavigator.Screen name="Home" component={MainStack} />
      <DrawerNavigator.Screen name="Other" component={OtherScreen} />
    </DrawerNavigator.Navigator>
  );
});
export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: _ => <CustomHeader />,
          headerStyle: {
            backgroundColor: COLORS.BACKGROUND,
          },
        }}
        name="Main"
        component={Main}
      />
    </Stack.Navigator>
  );
};
