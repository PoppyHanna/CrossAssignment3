import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

const CustomButton = ({ title, onPress, disabled = false }) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabledButton]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.8}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.darkBrown,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',

        ...SHADOWS.default,
    },

    buttonText: {
        color: COLORS.background,
        fontSize: 14,
        fontWeight: '600',
    },

    disabledButton: {
        opacity: 0.5,
    },
});

export default CustomButton;