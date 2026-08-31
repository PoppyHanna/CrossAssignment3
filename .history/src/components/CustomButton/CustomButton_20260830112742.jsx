import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/colors';

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
        backgroundColor: COLORS.primaryDark,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',

        ...Platform.select({ 
            ios: {
                shadowColor: COLORS.textPrimary,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 4,
            },

            android: {  
                elevation: 3,
            },
        }),
    },

    buttonText: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: '600',
    },

    disabledButton: {
        opacity: 0.5,
    },
});

export default CustomButton;