import React from 'react';
import { View, Text, Linking } from 'react-native';
import { globalStyles } from '../styles/global';
import DetailCard from '../shared/detailCard';
import DeleteButton from '../shared/deleteButton';

export default function About(){
    return(
        <View style={globalStyles.container}>
            <DetailCard>
                <Text style={globalStyles.titleText}>Version</Text>
                <Text style={globalStyles.descriptionText}>2020.09.07</Text>
            </DetailCard>
            <DetailCard>
                <Text style={globalStyles.titleText}>About the app</Text>
                <Text style={globalStyles.descriptionText}>
                    A simple cross-platform note-taking app made using React Native! 
                </Text>
            </DetailCard>
            <DetailCard>
                <Text style={globalStyles.titleText}>Contact</Text>
                <DeleteButton 
                    text="memosapp123@gmail.com"
                    onPress={() => Linking.openURL('mailto:memosapp123@gmail.com') }
                />
            </DetailCard>
        </View>
    )
}
