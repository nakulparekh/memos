import React from 'react';
import {StyleSheet, View, Text, Linking, Button} from 'react-native';
import { globalStyles } from '../styles/global';
import DetailCard from '../shared/detailCard';
import DeleteButton from '../shared/deleteButton';



export default function About(){
    return(
        <View style={globalStyles.container}>
            <DetailCard>
                <Text style={globalStyles.titleText}>Version</Text>
                <Text style={globalStyles.descriptionText}>2020.09.08</Text>
            </DetailCard>
            <DetailCard>
                <Text style={globalStyles.titleText}>About the app</Text>
                <Text style={globalStyles.descriptionText}>
                    A simple cross-platform mobile app to become familiar with React Native!
                </Text>
            </DetailCard>
            <DetailCard>
                <Text style={globalStyles.titleText}>Contact</Text>
                <DeleteButton 
                    text="nnpjunk@gmail.com"
                    onPress={() => Linking.openURL('mailto:nnpjunk@gmail.com') }
                    
                    // style={{backgroundColor:'maroon'}}
                />

            </DetailCard>
        </View>
    )
}
