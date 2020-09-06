import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeCard(props){
    
    
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        elevation: 2,
        backgroundColor: '#efefef',
        shadowOffset:{ width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 5,
        flexDirection: 'row',
        },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 18,
        flex: 1,
        justifyContent: 'flex-start',
    },
});