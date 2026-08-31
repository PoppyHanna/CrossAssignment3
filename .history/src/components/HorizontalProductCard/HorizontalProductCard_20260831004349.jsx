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
                <View style={styles.titleRow}>
                    <Text style={styles.title} numberOfLines={2}>
                    {title}
                    </Text>

                    <MaterialCommunityIcons
                    name="heart-outline"
                    size={18}
                    color={COLORS.primaryBrown}
                    />
                </View>

                <View style={styles.priceRow}>
                    <Text style={styles.price}>${price}</Text>

                    <MaterialCommunityIcons
                    name="plus"
                    size={22}
                    color={COLORS.primaryBrown}
                    />
                </View>
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
        paddingVertical: 16,
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