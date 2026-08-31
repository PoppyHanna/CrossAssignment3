import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';

const CustomButton = ({ title, onPress, disabled = false }) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabledButton]}
            onPress={onPress}>
            disabled={disabled}
            activeOpacity={0.8}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}