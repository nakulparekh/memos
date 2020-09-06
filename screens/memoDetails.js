import React from 'react';
import {StyleSheet, View, Text, } from 'react-native';
import { globalStyles } from '../styles/global';
import DetailCard from '../shared/detailCard';
import DeleteButton from '../shared/deleteButton';
import SaveButton from '../shared/saveButton';
import EditForm from './editForm'


export default function MemoDetails({navigation}){
    let memo = navigation.getParam('memo')
    let addMemo = navigation.getParam('addMemo')
    let removeMemo = navigation.getParam('removeMemo')
    let editMemo = navigation.getParam('editMemo')

    return(
        <View style={globalStyles.container}>
            {/* <DetailCard>
                <Text style={globalStyles.titleText}>{memo.memo}</Text>
                <Text style={globalStyles.descriptionText}>{memo.description}</Text>
            </DetailCard> */}

            <EditForm editMemo={editMemo} memo={memo} navigation={navigation}/>

            <View style={globalStyles.buttonContainer}>
                <DeleteButton text='Delete Memo' onPress={() => {
                    removeMemo(memo.key);
                    navigation.navigate('Home');
                }}/>
            </View>

            {/* <View style={globalStyles.buttonContainer}>
                <View style={styles.insideContainer}>
                    <DeleteButton text='Delete' onPress={() => {
                        removeMemo(memo.key);
                        navigation.navigate('Home');
                    }}/>
                    <SaveButton text='Save' onPress={() => {
                        navigation.navigate('Home');
                    }}/>
                </View>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    insideContainer:{
        flexDirection: 'row',
    }
})