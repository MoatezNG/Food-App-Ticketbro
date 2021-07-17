import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

type ProfileScreenProps = {
  style?: StyleProp<ViewStyle>;
};

const ProfileScreen = ({style}: ProfileScreenProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text>Profile!</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
