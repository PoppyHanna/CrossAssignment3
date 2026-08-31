import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import {useState} from 'react';
import { COLORS } from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

function PromoCodeInput({ value, onChangeText, OnSubmit, placeholder = 'Enter promo code...' }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.container, isFocused && styles.inputFocused]}> 
            <TextInput
                style={[styles.input]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={COLORS.textSecondary}
                autoCapitalize="characters"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={OnSubmit}
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
        // justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        borderRadius: 12,
        // paddingVertical: 14,
        paddingLeft: 16,
        paddingRight: 8,
        marginBottom: 24,
        // paddingHorizontal: 16,
    },

    button: {
        width: 32,
        height: 32,
        backgroundColor: COLORS.brown,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        flex: 1,
        // width: '100%',
        color: COLORS.textPrimary,
        fontSize: 12,
        fontWeight: '400',
        height: '100%',
        paddingVertical: 0,
    },

    arrow: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600',
    },

    inputFocused: {
        ...SHADOWS.default
    },
});

export default PromoCodeInput;