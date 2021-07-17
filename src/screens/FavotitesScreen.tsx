import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

type FavoritesScreenProps = {
  style?: StyleProp<ViewStyle>;
};

const FavoritesScreen = ({style}: FavoritesScreenProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text>Favorites!</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
