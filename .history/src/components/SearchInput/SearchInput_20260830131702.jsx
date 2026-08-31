import { Platform, StyleSheet, TextInput, View } from 'react-native';
import {useState} from 'react';
import { COLORS } from '../../constants/colors';

const SearchInput = ({value, onChangeText, placeholder = 'Search for coffee...'}) => {
    const [isFocused, setIsFocused] = useState(false);


    return (
        <View style={styles.container}>
            <TextInput
                style={[
                    styles.input,
                    isFocused && styles.inputFocused
                ]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={COLORS.textSecondary}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 24,
    },

    input: {
        height: 48,
        color: COLORS.textTertiary,
        backgroundColor: COLORS.white,
        borderRadius: 14,
        paddingHorizontal: 17,
        fontSize: 12,
        fontWeight: '400',
    },

    inputFocused: {
        ...Platform.select({
            ios: {
                shadowColor: COLORS.textTertiary,
                shadowOffset: {
                    width: 4,
                    height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },

            android: {
                elevation: 4,
            },
        }),
    },
});

export default SearchInput;