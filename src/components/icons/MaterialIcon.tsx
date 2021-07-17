import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from 'react-native-vector-icons/Icon';
import {useTheme} from '@react-navigation/native';
import {FONT_SIZE} from '../../style/styleVariables';

const MaterialIcon: React.FC<IconProps> = ({name, ...iconProps}) => {
  const {
    colors: {text},
  } = useTheme();

  return (
    <Icon name={name} color={text} size={FONT_SIZE.medium} {...iconProps} />
  );
};

export default MaterialIcon;
