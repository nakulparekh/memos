import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function DeleteButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 10,
        // width: 185,
        marginRight: 5,
        backgroundColor: 'maroon',
        justifyContent: 'flex-end',
        alignItems:'center',
    },
    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },
})