import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function DetailCard(props){
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
        marginHorizontal: 4,
        marginVertical: 10,
        flexDirection: 'row',
        },
    cardContent:{
        marginHorizontal: 18,
        flex: 1,
        justifyContent: 'flex-start',
    },
});