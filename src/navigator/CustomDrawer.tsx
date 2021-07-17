import React from 'react';
import {StyleSheet} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import MaterialIcon from '../components/icons/MaterialIcon';
import {COLORS, DEFAULT_SPACE, FONT_SIZE} from '../constants/styleVariables';

const CustomDrawer: React.FC<
  DrawerContentComponentProps<DrawerContentOptions>
> = props => {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <DrawerItemList
        activeTintColor={COLORS.PRIMARY}
        labelStyle={styles.drawerText}
        itemStyle={styles.drawerButton}
        {...props}
      />
      <DrawerItem
        icon={() => <MaterialIcon name="logout" color={COLORS.PRIMARY} />}
        onPress={console.log}
        label="Logout"
        labelStyle={[styles.drawerText]}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
  },
  drawerText: {
    fontSize: FONT_SIZE.xSmall,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  drawerButton: {
    marginRight: DEFAULT_SPACE * 2,
  },
});
