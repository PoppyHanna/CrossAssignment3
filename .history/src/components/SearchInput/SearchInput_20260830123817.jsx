import {StyleSheet, TextInput, View} from 'react-native';
import { COLORS } from '../../constants/colors';

const SearchInput = ({value, onChangeText, placeholder = 'Search for coffee...'}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={COLORS.textSecondary}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },

    input: {
        height: 48,
        color: COLORS.textTertiary,
        backgroundColor: COLORS.background,
        fontSize: 12,
        fontWeight: '400',
    },
});

export default SearchInput;