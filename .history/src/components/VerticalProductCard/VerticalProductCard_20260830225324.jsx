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

    const isLandscape = width > 600;

    // const SCREENS_PADDING = 24; // Total padding for both sides of the screen
    // const CARD_GAP = 12; // Margin between cards

    // // Two cards per row, so we divide the available width by 2 and subtract the gap between them
    // const cardWidth = (width - SCREENS_PADDING * 2 - CARD_GAP) / 2;

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
            activeOpacity={0.8}>
            <Image
                source={image}
                style={[
                    styles.image,
                    isLandscape ? styles.imageLandscape : styles.imagePortrait,
                ]}
                resizeMode="cover" />
            
            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    // card: {
    //     flex: 1,
    //     backgroundColor: COLORS.lightBeige,
    //     borderRadius: 14,
    //     overflow: 'hidden',
    //     ...SHADOWS.default,
    // },

    card: {
        width: '46%',
        backgroundColor: COLORS.lightBeige,
        borderRadius: 14,
        overflow: 'hidden',
        ...SHADOWS.default,
    },

    image: {
        width: '100%',
        // height: 140,
    },
    
    imagePortrait: {
        height: 120,
    },

    imageLandscape: {
        height: 125,
    },

    content: {
        height: 86,
        paddingHorizontal: 12,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        color: COLORS.textTertiary,
    },

    price: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textTertiary,
    },
            
});

export default VerticalProductCard;