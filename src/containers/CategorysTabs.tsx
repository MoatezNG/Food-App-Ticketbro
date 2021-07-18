import React, {useCallback, useState} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import Tab from '../components/home/Tab';
import {Category} from '../models/ISustenance';
import {COLORS, DEFAULT_SPACE} from '../style/styleVariables';
export const LINEWIDTH = DEFAULT_SPACE * 8.7;
export type CategorysHorizontalFlatListProps = {
  data: Category[];
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onChangeCategory: (item: Category) => void;
};
const CategorysTabs = ({
  data,
  contentContainerStyle,
  onChangeCategory,
}: CategorysHorizontalFlatListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = withSpring(currentIndex * LINEWIDTH, {
      overshootClamping: true,
    });
    return {
      transform: [{translateX: translateX}],
    };
  });

  const onPress = useCallback(
    (index: number, item: Category) => {
      onChangeCategory(item);
      setCurrentIndex(index);
    },
    [onChangeCategory],
  );

  return (
    <View style={contentContainerStyle}>
      <View style={[styles.categoryContainer]}>
        {data.map((item, index) => {
          return (
            <React.Fragment key={item}>
              <Tab {...{item, index, currentIndex, onPress}} />
            </React.Fragment>
          );
        })}
      </View>
      <Animated.View style={[styles.line, animatedStyle]} />
    </View>
  );
};
const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
  },
  line: {
    height: 3,
    backgroundColor: COLORS.PRIMARY,
    width: LINEWIDTH,
  },
});

export default CategorysTabs;
