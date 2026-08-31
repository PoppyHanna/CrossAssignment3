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