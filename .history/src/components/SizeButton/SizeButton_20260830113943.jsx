import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { COLORS } from '../../constants/colors';

const SizeButton = ({ title, onPress, isActive = false }) => {
    return (
        <TouchableOpacity
            style={[styles.button, isActive ? styles.activeButton : styles.inactiveButton]}
            onPress={onPress}
            activeOpacity={0.8}
        >   
            <Text style={[styles.text, isActive ? styles.activeText : styles.inactiveText]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },

    activeButton: {
        backgroundColor: COLORS.primaryBrown,
    },

    inactiveButton: {
        backgroundColor: COLORS.primaryBeige,
    },

    text: {
        fontSize: 14,
        fontWeight: '600',
    },

    activeText: {  
        color: COLORS.white,
    },
    
    inactiveText: {
        color: COLORS.textPrimary,
    },
});

export default SizeButton;