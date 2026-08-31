import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import CustomButton from './src/components/CustomButton/CustomButton';
import SizeButton from './src/components/SizeButton/SizeButton';
import SearchInput from './src/components/SearchInput/SearchInput';
import PromoCodeInput from './src/components/PromoCodeInput/PromoCodeInput';
import VerticalProductCard from './src/components/VerticalProductCard/VerticalProductCard';
import HorizontalProductCard from './src/components/HorizontalProductCard/HorizontalProductCard';
import BottomTabBar from './src/components/BottomTabBar/BottomTabBar';

import { COLORS } from './src/constants/colors';
const ComponentsScreen = () => {
    const [selectedSize, setSelectedSize] = useState('Medium');
    const [search, setSearch] = useState('');
    const [promoCode, setPromoCode] = useState('');
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}>
            
            <SearchInput value={search} onChangeText={setSearch} />
        
            <View style={styles.sizes}>
                <SizeButton
                    title="Small"
                    isSelected={selectedSize === 'Small'}
                    onPress={() => setSelectedSize('Small')}
                />
                <SizeButton
                    title="Medium"
                    isSelected={selectedSize === 'Medium'}
                    onPress={() => setSelectedSize('Medium')}
                />
                <SizeButton
                    title="Large"
                    isSelected={selectedSize === 'Large'}
                    onPress={() => setSelectedSize('Large')}
                />
            </View>

            <PromoCodeInput
                value={promoCode}
                onChangeText={setPromoCode}
                onSubmit={() => console.log('Promo code:', promoCode)}
            />