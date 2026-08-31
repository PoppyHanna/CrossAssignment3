import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/Colors';

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