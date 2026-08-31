import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

const HorizontalProductCard = ({
    image,
    title,
    description,   
    price,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
            activeOpacity={0.8}>
        
            <Image
                source={image}
                style={styles.image}
                resizeMode="cover" />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: COLORS.lightBeige,
        borderRadius: 14,
        overflow: 'hidden',
        ...SHADOWS.default,
    },

    image: {
        width: 110,
        height: 110,
        margin: 12,
    },

    content: {
        flex: 1,
        padding: 12,
    },

    title: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textTertiary,
        marginBottom: 8,
    },

    description: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.textSecondary,
        marginBottom: 8,
    },

    price: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.textTertiary,
    },
});

export default HorizontalProductCard;