import React from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {DEFAULT_SPACE} from '../style/styleVariables';
import MenuIcon from '../svg/MenuIcon';
import ShopingCart from '../svg/ShopingCart';
import NavigationService from '../services/NavigationService';

type CustomHeaderProps = {
  style?: StyleProp<ViewStyle>;
};

const CustomHeader = ({style}: CustomHeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={NavigationService.toggleDrawer}>
        <MenuIcon />
      </Pressable>
      <ShopingCart />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: DEFAULT_SPACE * 3,
  },
});
