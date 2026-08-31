import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import CustomButton from '../components/CustomButton/CustomButton';
import SizeButton from '../components/SizeButton/SizeButton';
import SearchInput from '../components/SearchInput/SearchInput';
import PromoCodeInput from '../components/PromoCodeInput/PromoCodeInput';
import VerticalProductCard from '../components/VerticalProductCard/VerticalProductCard';
import HorizontalProductCard from '../components/HorizontalProductCard/HorizontalProductCard';
import BottomTabBar from '../components/BottomTabBar/BottomTabBar';

import { COLORS } from '../constants/colors';
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
                    isActive={selectedSize === 'Small'}
                    onPress={() => setSelectedSize('Small')}
                />
                <SizeButton
                    title="Medium"
                    isActive={selectedSize === 'Medium'}
                    onPress={() => setSelectedSize('Medium')}
                />
                <SizeButton
                    title="Large"
                    isActive={selectedSize === 'Large'}
                    onPress={() => setSelectedSize('Large')}
                />
            </View>

            <PromoCodeInput
                value={promoCode}
                onChangeText={setPromoCode}
                onSubmit={() => console.log('Promo code:', promoCode)}
            />

            <View style={styles.cardsRow}>
                <VerticalProductCard
                        image={require('../assets/images/cappuccino.jpg')}
                        title="Cappuccino rich and foamy"
                        price="4.00"
                        onPress={() => console.log('Cappuccino pressed')}
                    />  

                <VerticalProductCard
                    image={require('../assets/images/ice_coffees.jpg')}
                    title="Iced coffee with milk"
                    price="4.10"
                    onPress={() => console.log('Iced coffee with milk')}
                /> 
            
            </View>

            <View style={styles.cardsColumn}>
                <HorizontalProductCard
                    image={require('../assets/images/espresso.jpg')}
                    title="Espresso with creamy milk"
                    price="3.50"
                    onPress={() => console.log('Espresso with creamy milk pressed')}
                />
                
                <HorizontalProductCard
                    image={require('../assets/images/latte.jpg')}
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

        </ScrollView>
    );
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    content: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 24,
    },

    sizes: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 24,
    },

    cardsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },

    cardsColumn: {
        flexDirection: 'column',
        gap: 20,
        marginBottom: 24,
    },

    customButtonContainer: {
        marginBottom: 24,
    },
});

export default ComponentsScreen;
       