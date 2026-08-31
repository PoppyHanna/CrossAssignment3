import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons/static';

import {COLORS} from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

const HorizontalProductCard = ({
    image,
    title, 
    price,
    onPress
}) => {
    const { width } = useWindowDimensions();

    // Use a slightly wider image on larger screens.
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
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: COLORS.lightBeige,
        borderRadius: 14,
        overflow: 'hidden',
        ...SHADOWS.default,
    },

    image: {
        height: 133,   
    },

    imagePortrait: {
        width: 145,
    },

    imageLandscape: {
        width: 180,
    },

    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 18,
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 20,
        color: COLORS.textTertiary,
    },

    price: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textTertiary,
    },
});

export default HorizontalProductCard;