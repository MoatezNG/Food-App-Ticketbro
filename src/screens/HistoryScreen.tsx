import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

type HistoryScreenProps = {
  style?: StyleProp<ViewStyle>;
};

const HistoryScreen = ({style}: HistoryScreenProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text>History!</Text>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
