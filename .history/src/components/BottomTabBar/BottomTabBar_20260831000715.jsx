import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons/static';

import {COLORS} from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

const tabs = [
    {name: 'Home', icon: 'home-outline'},
    {name: 'Menu', icon: 'silverware-fork-knife'},
    {name: 'Cart', icon: 'cart-outline'},
    {name: 'Profile', icon: 'account-outline'},
];

const BottomTabBar = ({ activeTab, onTabPress }) => {

    return (
        <View style={styles.container}>
            {/* Changes the text style depending on the currently selected tab. */}
            {tabs.map((tab) => {
                const isActive = activeTab === tab.name;
                
                return (
                    <TouchableOpacity
                        key={tab.name}
                        style={styles.tab}
                        onPress={() => onTabPress(tab.name)}
                        activeOpacity={0.8}
                    >
                        <MaterialCommunityIcons
                            name={tab.icon}
                            size={22}
                            color={isActive ? COLORS.primaryBrown : COLORS.textSecondary}
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