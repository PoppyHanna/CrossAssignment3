import React, {useState} from 'react';
// import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


import CustomButton from './src/components/CustomButton/CustomButton';
import SizeButton from './src/components/SizeButton/SizeButton';
import SearchInput from './src/components/SearchInput/SearchInput';
import PromoCodeInput from './src/components/PromoCodeInput/PromoCodeInput';
import VerticalProductCard from './src/components/VerticalProductCard/VerticalProductCard';
import HorizontalProductCard from './src/components/HorizontalProductCard/HorizontalProductCard';
import BottomTabBar from './src/components/BottomTabBar/BottomTabBar';



import {COLORS} from './src/constants/colors';

function App() {

  const [selectedSize, setSelectedSize] = useState('Medium');
  const [search, setSearch] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [activeTab, setActiveTab] = useState('Home');

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
          
            <View style={styles.cardsRow}>
              <VerticalProductCard
                image={require('./src/assets/images/cappuccino.jpg')}
                title="Cappuccino rich and foamy"
                price="4.00"
                onPress={() => console.log('Cappuccino pressed')}
              />  

              <VerticalProductCard
                image={require('./src/assets/images/ice_coffees.jpg')}
                title="Iced coffee with milk"
                price="4.10"
                onPress={() => console.log('Iced coffee with milk')}
              /> 
            
            </View>

            <View style={styles.cardsColumn}>
              <HorizontalProductCard
                image={require('./src/assets/images/espresso.jpg')}
                title="Espresso with creamy milk"
                price="3.50"
                onPress={() => console.log('Espresso with creamy milk pressed')}
              />
            
              <HorizontalProductCard
                image={require('./src/assets/images/latte.jpg')}
                title="Latte smooth and mild"
                price="4.50"
                onPress={() => console.log('Latte smooth and mild pressed')}
              />
            </View>

            
          
            <View style={styles.customButtonContainer}>
              <CustomButton
                title="Add to cart"
                onPress={() => console.log('Add to cart pressed')}
              />
            </View>
          
          <BottomTabBar
                activeTab={activeTab}
                onTabPress={setActiveTab}
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

  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 12,
    marginBottom: 24,
  },

  cardsColumn: {
    flexDirection: 'column',
    
    gap: 20,
    marginBottom: 24,
  },

  customButtonContainer: {
    marginTop: 24,
  },
});

export default App;