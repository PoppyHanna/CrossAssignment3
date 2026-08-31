import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
// import {useState} from 'react';
import { COLORS } from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

function PromoCodeInput({ value, onChangeText, OnSubmit, placeholder = 'Enter promo code...' }) {
    return (
        <View style={styles.container}> 
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={COLORS.textSecondary}
                autoCapitalize="characters"
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 16,

        ...SHADOWS.default,
    },

    button: {
        width: 24,
        height: 24,
        backgroundColor: COLORS.brown,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        color: COLORS.textPrimary,
        fontSize: 14,
        fontWeight: '400',
    },
});

export default PromoCodeInput;