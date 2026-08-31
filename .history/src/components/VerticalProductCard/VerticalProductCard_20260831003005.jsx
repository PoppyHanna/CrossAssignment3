import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons/static';

import { COLORS } from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

const VerticalProductCard = ({
    image,
    title,
    price,
    onPress
}) => {
    
    const { width } = useWindowDimensions();

    // Adjust image height for portrait and landscape screen orientations.
    const isLandscape = width > 600;

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
    card: {
        // Keeps two equal cards in one row with space between them.
        width: '47%',
        backgroundColor: COLORS.lightBeige,
        borderRadius: 14,
        overflow: 'hidden',
        ...SHADOWS.default,
    },

    image: {
        width: '100%',
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
        fontWeight: '600',
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