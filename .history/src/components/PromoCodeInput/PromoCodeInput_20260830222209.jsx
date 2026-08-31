import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

function PromoCodeInput({ value, onChangeText, onSubmit, placeholder = 'Enter promo code...' }) {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={COLORS.background}
                autoCapitalize="characters"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onSubmit}
                activeOpacity={0.8}
            >
                <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primaryBrown,
        ...SHADOWS.default,
        borderRadius: 6,
        paddingLeft: 16,
        paddingRight: 8,
        marginBottom: 24,
        ...SHADOWS.default,
    },

    input: {
        flex: 1,
        height: '100%',
        paddingVertical: 0,
        paddingRight: 12,
        color: COLORS.background,
        fontSize: 12,
        fontWeight: '400',
    },

    // button: {
    //     width: 24,
    //     height: 24,
    //     backgroundColor: COLORS.brown,
    //     borderRadius: 8,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },

    arrow: {
        color: COLORS.white,
        fontSize: 24,
        fontWeight: '600',
    },

});

export default PromoCodeInput;