import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { COLORS } from '../../constants/colors';

const SizeButton = ({ title, onPress, isActive = false }) => {
    return (
        <TouchableOpacity
            style={[styles.button, isActive ? styles.activeButton : styles.inactiveButton]}