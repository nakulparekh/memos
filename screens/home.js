import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal,
TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { globalStyles } from '../styles/global';
import HomeCard from '../shared/homeCard';
import { MaterialIcons } from '@expo/vector-icons';
import MemoForm from './memoForm';

export default function Home({navigation}){
    const [modalOpen, setModalOpen] = useState(false);
    
    const [memos, setMemos] = useState([])

    const addMemo = (memo) => {
        memo.key = Math.random().toString();
        newMemos = [memo, ...memos]

        setMemos(newMemos);
        save(newMemos);

        setModalOpen(false);
    }

    const removeMemo = (memoKey) => {
        newMemos = memos.filter((memo) => {
            return memo.key != memoKey
        });
        
        setMemos(newMemos);
        save(newMemos);
    }

    const editMemo = (memoNew, memoOldKey) => {
        note = memos.find(note => note.key == memoOldKey)
        note.memo = memoNew.memo;
        note.description = memoNew.description;

        newMemos = [...memos]
        setMemos(newMemos);
        save(newMemos);
    }

    const STORAGE_KEY = '@save_memo'

    const save = async(memosToSave) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(memosToSave))
        } catch(err){
            alert('error')
        }
    };

    const load = async() => {
        try{
            const jsonMemo = await AsyncStorage.getItem(STORAGE_KEY)
            
            if(jsonMemo != null){
                setMemos(JSON.parse(jsonMemo));
            }

        } catch(err){
            alert('error')
        }
    };

    useEffect(() => {
        load()
    }, [])

    return(
        <View style={globalStyles.container}>
            <Modal 
                visible={modalOpen} 
                animationType='slide'
                >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <MaterialIcons 
                                name='arrow-back'
                                style = {{ ...styles.modalToggle, ...styles.modalClose }}
                                size={27}
                                onPress={() => setModalOpen(false)}
                            />
                            <Text style={globalStyles.createText}>New memo</Text>
                        </View>
                        <ScrollView>
                            <MemoForm addMemo={addMemo}/>
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <FlatList
                style={{flex: 1, backgroundColor: '#efefef'}}
                data={memos}
                extraData={memos}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('MemoDetails', {
                            memo: item,
                            removeMemo: removeMemo,
                            editMemo: editMemo,
                        })}
                        >
                            <HomeCard>
                                <Text style={globalStyles.titleText}>{ item.memo }</Text>
                                <Text  numberOfLines={1} style={globalStyles.descriptionText}>{ item.description }</Text> 
                            </HomeCard>
                    </TouchableOpacity>
                )}
            />
            <MaterialIcons 
                name='add'
                size={28}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle:{
        backgroundColor: 'maroon',
        color: '#efefef',
        width: 75,
        height: 75,
        borderRadius: 50,
        elevation: 6,
        padding: 23,
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 15,
        bottom: 15,
    },
    fabIcon: {
        fontSize: 28,
        color: '#efefef'
    },
    modalClose:{
        left: 15,
        marginTop: 30,
        marginBottom: 5,
        marginRight: 23,
        backgroundColor: '#fff',
        color: '#242424',
        width: 40,
        height: 30,
        borderRadius: 0,
        elevation: 0,
        padding: 0,
        alignSelf: 'flex-start',
        position: 'relative', 
    },
    modalSave:{
        backgroundColor: '#fff',
        color: '#242424',
        width: 60,
        paddingLeft: 10,
        alignSelf: 'flex-end',
        position: 'relative',
        right: 15,
        bottom: 40, 
        left: 5,
    },  
    modalContent:{
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        overflow: 'scroll',
    },
    modalHeader:{
        flexDirection:'row',
        paddingBottom: 5,
    }
});