import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import { COLORS } from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

const VerticalProductCard = ({
    image,
    title,
    price,
    onPress
}) => {
    
    const { width } = useWindowDimensions();

    const SCREENS_PADDING = 24; // Total padding for both sides of the screen
    const CARD_GAP = 12; // Margin between cards

    // Two cards per row, so we divide the available width by 2 and subtract the gap between them
    const cardWidth = (width - SCREENS_PADDING * 2 - CARD_GAP) / 2;

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
                <Text style={styles.price}>${price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 250,
        backgroundColor: COLORS.lightBeige,
        borderRadius: 14,
        overflow: 'hidden',

        ...SHADOWS.default,
    },

    image: {
        width: '100%',
        height: 155,
    },

    content: {
        padding: 12,
    }, 

    title: {
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.textTertiary,
        marginBottom: 10,
    },

    price: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textTertiary,
    },
            
});

export default VerticalProductCard;