import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {LINEWIDTH} from '../../containers/CategorysTabs';
import {Category} from '../../models/ISustenance';
import {COLORS, DEFAULT_SPACE, FONT_SIZE} from '../../style/styleVariables';

type TabProps = {
  item: Category;
  onPress: (index: number, item: Category) => void;
  currentIndex: number;
  index: number;
};

const Tab = ({onPress, item, currentIndex, index}: TabProps) => {
  return (
    <Pressable
      onPress={() => onPress(index, item)}
      style={{
        width: LINEWIDTH,
      }}>
      <Text
        style={[
          styles.categoryText,
          {
            color: currentIndex === index ? COLORS.PRIMARY : COLORS.SECONDARY,
          },
        ]}>
        {item}
      </Text>
    </Pressable>
  );
};

export default Tab;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: FONT_SIZE.medium * 1.2,
    marginBottom: DEFAULT_SPACE,
    fontWeight: '400',
    color: COLORS.PRIMARY,
    textAlign: 'center',
  },
});
