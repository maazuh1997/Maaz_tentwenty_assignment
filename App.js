import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/Store/Store';
import AppNavigation from './src/navigations'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
