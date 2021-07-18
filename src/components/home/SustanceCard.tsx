import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {COLORS, DEFAULT_SPACE, FONT_SIZE} from '../../style/styleVariables';

interface IProps {
  imageURL: string;
  name: string;
  price: string;
  index: number;
}
const SustanceCard: React.FC<IProps> = ({imageURL, name, price}) => {
  const {colors} = useTheme();
  const scale = useSharedValue(1);
  const onPressIn = () => {
    scale.value = withSpring(0.95);
  };
  const onPressOut = () => {
    scale.value = withSpring(1);
  };

  const container = useAnimatedStyle(() => ({
    marginLeft: DEFAULT_SPACE * 3.4,
    width: DEFAULT_SPACE * 22,
    height: DEFAULT_SPACE * 27,
    transform: [{scale: scale.value}],
  }));

  return (
    <Animated.View style={container}>
      <TouchableOpacity
        activeOpacity={1}
        style={style.touchable}
        {...{onPressIn, onPressOut}}>
        <View style={[style.card, {backgroundColor: colors.card}]}>
          <View style={style.imageContainer}>
            <Image
              style={style.image}
              resizeMode="cover"
              source={{uri: imageURL}}
            />
          </View>
          <View style={style.textPriceContainer}>
            <Text style={style.name}>{name}</Text>
            <Text style={[style.price, style.name]}>{`${price}€`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SustanceCard;
const style = StyleSheet.create({
  image: {
    height: DEFAULT_SPACE * 15,
    width: DEFAULT_SPACE * 15,
    borderRadius: (DEFAULT_SPACE * 15) / 2,
  },
  imageContainer: {
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: DEFAULT_SPACE * -5,
  },
  touchable: {
    flex: 1,
  },
  card: {
    borderRadius: DEFAULT_SPACE * 3,
    flex: 1,
  },
  name: {
    fontSize: FONT_SIZE.xmedium,
    fontWeight: '700',
    textAlign: 'center',
  },
  price: {
    marginTop: DEFAULT_SPACE * 1.5,
    color: COLORS.PRIMARY,
  },
  textPriceContainer: {
    marginHorizontal: DEFAULT_SPACE * 5,
    marginTop: DEFAULT_SPACE * 14.5,
  },
});
