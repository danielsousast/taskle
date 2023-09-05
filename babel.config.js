module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/presentation/components',
          '@navigation': './src/main/navigation',
          '@screens': './src/presentation/screens',
          '@theme': './src/theme',
          '@utils': './src/shared/utils',
          '@assets': './src/shared/assets',
        },
      },
    ],
  ],
};
