import React, {useState} from 'react';
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


import CustomButton from './src/components/CustomButton/CustomButton';
import SizeButton from './src/components/SizeButton/SizeButton';
import SearchInput from './src/components/SearchInput/SearchInput';


import {COLORS} from './src/constants/colors';

function App() {

  const [selectedSize, setSelectedSize] = useState('Medium');
  const [search, setSearch] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.content}>

            <SearchInput
              value={search}
              onChangeText={setSearch}
              // placeholder="Search for coffee..."
            />

            <View style={styles.sizes}>
              <SizeButton
                title="Small"
                isActive={selectedSize === 'Small'}
                onPress={() => setSelectedSize('Small')}
              />
              <SizeButton
                title="Medium"
                isActive={selectedSize === 'Medium'}
                onPress={() => setSelectedSize('Medium')} />
              <SizeButton
                title="Large"
                isActive={selectedSize === 'Large'}
                onPress={() => setSelectedSize('Large')} />
            </View>

            <CustomButton
              title="Add to cart"
              onPress={() => console.log('Add to cart pressed')}
            />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  sizes: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: 12,
    marginBottom: 24,
  },
});

export default App;