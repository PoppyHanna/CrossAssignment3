import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {COLORS} from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

const BottomTabBar = ({ activeTab, onTabPress }) => {
    const tabs = ['Home', 'Menu', 'Cart', 'Profile'];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => {
                const isActive = activeTab === tab;
                
                return (
                    <TouchableOpacity
                        key={tab}
                        style={styles.tab}
                        onPress={() => onTabPress(tab)}
                        activeOpacity={0.8}
                        >
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
        // justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.lightBeige,
        borderRadius: 14,
        // paddingVertical: 12,
        paddingHorizontal: 8,
        // marginBottom: 24,
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