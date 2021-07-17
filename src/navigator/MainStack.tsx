import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

import MaterialIcon from '../components/icons/MaterialIcon';
import {COLORS, FONT_SIZE} from '../constants/styleVariables';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavotitesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';
import {getTabBarIconName} from '../helpers/getTabBarIconName';
export type MainStackParamList = {
  Home: undefined;
  Favorites: undefined;
  Profile: undefined;
  History: undefined;
};
export type MainStackNavigationProp = BottomTabNavigationProp<
  MainStackParamList,
  keyof MainStackParamList
>;
export type MainStackRouteProp<T extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  T
>;

const Tab = createBottomTabNavigator<MainStackParamList>();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const iconName = getTabBarIconName(route.name);
          return (
            <MaterialIcon
              size={FONT_SIZE.large}
              name={iconName as string}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.PRIMARY,
        inactiveTintColor: COLORS.SECONDARY,
        style: {
          backgroundColor: COLORS.BACKGROUND,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};
