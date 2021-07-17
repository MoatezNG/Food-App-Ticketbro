import {MainStackParamList} from '../navigator/MainStack';

export const getTabBarIconName = (routeName: keyof MainStackParamList) => {
  let iconName;

  switch (routeName) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Favorites':
      iconName = 'heart-outline';
      break;
    case 'Profile':
      iconName = 'account-outline';
      break;
    case 'History':
      iconName = 'history';
      break;
    default:
      break;
  }
  return iconName;
};
