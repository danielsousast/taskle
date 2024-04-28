import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {HomeScreen} from './src/screens/HomeScreen';

export function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <HomeScreen />
    </GestureHandlerRootView>
  );
}
