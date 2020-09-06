import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Home from '../screens/home';

export default function Header({ navigation, title }){
    
    const openMenu = () => {
        navigation.openDrawer()
    }
    
    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 22,
        color: '#efefef',
        letterSpacing: 0.5,
        left: 55,
    },
    icon:{
        position: 'absolute',
        left: 10,
        color: '#efefef'
    },
});