import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import ComponentsScreen from './src/screens/ComponentsScreen';
import { COLORS } from './src/constants/colors';


function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <ComponentsScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;