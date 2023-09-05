import React from 'react';
import Home from './src/presentation/screens/Home';
import themes from './src/shared/styles';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

const App: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme =
    deviceTheme && deviceTheme === 'dark' ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
