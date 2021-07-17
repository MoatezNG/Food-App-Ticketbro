import React from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import SustanceCard from '../components/home/SustanceCard';
import {DEFAULT_SPACE} from '../style/styleVariables';
import {ISustenance} from '../models/ISustenance';

export type SustancesHorizontalFlatListProps = {
  data: ISustenance[];
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const renderSustanceCard: ListRenderItem<ISustenance> = ({item, index}) => (
  <SustanceCard
    price={item.price}
    imageURL={item.imageURL}
    name={item.name}
    index={index}
  />
);

const SustancesHorizontalFlatList = ({
  data,
  style,
  contentContainerStyle,
}: SustancesHorizontalFlatListProps) => {
  return (
    <FlatList
      style={style}
      data={data}
      renderItem={renderSustanceCard}
      keyExtractor={item => item.name}
      horizontal
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={contentContainerStyle}
      snapToInterval={styles.snapCard.width}
    />
  );
};
const styles = StyleSheet.create({
  snapCard: {
    width: DEFAULT_SPACE * 25.4,
  },
});

export default SustancesHorizontalFlatList;
