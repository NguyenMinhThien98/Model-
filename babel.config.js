module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          components: './src/components',
          // services: './src/services',
          // logic: './src/logic',
          // ui: './src/ui',
          // assets: './src/assets',
          // shared: './firebase/functions/src/shared',
          // store: './src/store',
          // globalStyles: './src/globalStyles',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
