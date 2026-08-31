import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import { COLORS } from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

const VerticalProductCard = ({ image, title, description, price, onPress }) => {
    const { width } = useWindowDimensions();
    const cardWidth = (width - 70) / 2; // Adjust the multiplier as needed

    return (
        <TouchableOpacity
            style={[styles.card, { width: cardWidth }]}
            onPress={onPress}
            activeOpacity={0.8}>
            <Image
                source={image}
                style={styles.image}
                resizeMode="cover" />
            
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text
                    style={styles.description}
                    numeberOfLines={2}
                >{description}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 14,
        overflow: 'hidden',
        ...SHADOWS.default,
    },

    image: {
        width: '100%',
        height: 150,
    },

    content: {
        padding: 12,
    }, 

    title: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textPrimary,
        marginBottom: 10,
    },

    description: {
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.textSecondary,
        marginBottom: 10,
    },

    price: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textPrimary,
    },
            
});