import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {COLORS} from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

const BottomTabBar = ({ activeTab, onTabPress }) => {
    const tabs = ['Home', 'Menu', 'Cart', 'Profile'];

    return (
        <View style={styles.container}>
            {/* Changes the text style depending on the currently selected tab. */}
            {tabs.map((tab) => {
                const isActive = activeTab === tab;
                
                return (
                    <TouchableOpacity
                        key={tab}
                        style={styles.tab}
                        onPress={() => onTabPress(tab)}
                        activeOpacity={0.8}
                    >
                        <MaterialCommunityIcons
                            name="home-outline"
                            size={24}
                            color={COLORS.primaryBrown}
                        />

                        <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                );  
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.lightBeige,
        borderRadius: 14,
        paddingHorizontal: 8,
        ...SHADOWS.default,
    },

    tab: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tabText: {
        color: COLORS.textSecondary,
        fontSize: 14,
        fontWeight: '400',
    },

    activeTabText: {
        color: COLORS.primaryBrown,
        fontWeight: '600',
    },
});

export default BottomTabBar;