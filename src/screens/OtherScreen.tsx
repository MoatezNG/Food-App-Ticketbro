import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

type OtherScreenProps = {
  style?: StyleProp<ViewStyle>;
};

const OtherScreen = ({style}: OtherScreenProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text>Other screen!</Text>
    </View>
  );
};

export default OtherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
