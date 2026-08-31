import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


import CustomButton from './src/components/CustomButton/CustomButton';
import SizeButton from './src/components/SizeButton/SizeButton';

import {COLORS} from './src/constants/colors';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.sizes}>
          <SizeButton title="Small" />
          <SizeButton title="Medium" isActive={true}/>
          <SizeButton title="Large" />
        </View>
        <CustomButton
          title="Add to cart"
          onPress={() => console.log('Add to cart pressed')}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: COLORS.background,
  },
  
  sizes: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: 12,
    marginBottom: 24,
  },
});

export default App;