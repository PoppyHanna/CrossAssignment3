import React, {useState} from 'react';
// import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


import CustomButton from './src/components/CustomButton/CustomButton';
import SizeButton from './src/components/SizeButton/SizeButton';
import SearchInput from './src/components/SearchInput/SearchInput';
import PromoCodeInput from './src/components/PromoCodeInput/PromoCodeInput';
import VerticalProductCard from './src/components/VerticalProductCard/VerticalProductCard';




import {COLORS} from './src/constants/colors';

function App() {

  const [selectedSize, setSelectedSize] = useState('Medium');
  const [search, setSearch] = useState('');
  const [promoCode, setPromoCode] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> */}
          <View style={styles.content}>

            <SearchInput
              value={search}
              onChangeText={setSearch}
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

            <PromoCodeInput
              value={promoCode}
              onChangeText={setPromoCode}
              onSubmit={() => console.log('Promo code:', promoCode)}
            />
          
            <VerticalProductCard
              image={require('./src/assets/images/cappuccino.png')}
              title="Cappuccino rich and foamy"
              // description="Cappuccino is a classic coffee drink with espresso, hot milk and thick milk foam."
              price="3.50"
              onPress={() => console.log('Cappuccino pressed')}
            />  

            <CustomButton
              title="Add to cart"
              onPress={() => console.log('Add to cart pressed')}
            />
          </View>
        {/* </TouchableWithoutFeedback> */}
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
    justifyContent: 'space-between',
    // gap: 12,
    marginBottom: 24,
  },
});

export default App;