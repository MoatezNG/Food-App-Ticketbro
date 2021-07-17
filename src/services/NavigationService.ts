import React from 'react';
import {DrawerActions, NavigationContainerRef} from '@react-navigation/native';
export const navigationRef = React.createRef<NavigationContainerRef>();

const toggleDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
};

export default {
  toggleDrawer,
};
