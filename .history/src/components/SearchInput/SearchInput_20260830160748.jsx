import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

import { COLORS } from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

const SearchInput = ({value, onChangeText, placeholder = 'Search for coffee...'}) => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles}
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
    marginBottom: 24,
    
    backgroundColor: COLORS.white,
    paddingLeft: 16,
    borderRadius: 14,
    
    ...SHADOWS.default,
  },

  input: {
    width: '100%',
    height: 48,


    paddingHorizontal: 17,
    paddingVertical: 0,

    color: COLORS.textTertiary,
    fontSize: 12,
    fontWeight: '400',

    textAlignVertical: 'center',

  },
});

export default SearchInput;