module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    ],
    'module:react-native-dotenv',
    'react-native-reanimated/plugin',
  ],
};
