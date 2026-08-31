import {StyleSheet, TextInput, View} from 'react-native';
import { COLORS } from '../../constants/colors';

const SearchInput = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                placeholderTextColor={COLORS.textSecondary}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        borderColor: COLORS.border,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    input: {
        color: COLORS.textPrimary,
        fontSize: 16,
        fontWeight: '400',
    },
});

export default SearchInput;