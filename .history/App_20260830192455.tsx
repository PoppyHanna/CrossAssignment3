import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import ComponentsScreen from './src/screens/ComponentsScreen';
imporrt { COLORS } from './src/constants';


function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;