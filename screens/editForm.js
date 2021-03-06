import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';

const memoSchema = yup.object({
    memo: yup.string()
        .required()
        .min(1),
    description: yup.string()
        .min(1),
})

export default function EditForm({ editMemo, memo, navigation }) {
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ memo: memo.memo, description: memo.description }}
                validationSchema={memoSchema}
                onSubmit={( values, actions ) => {
                    actions.resetForm();
                    editMemo(values, memo.key);
                    navigation.navigate('Home');
                }}
            >
                {(props) => (
                    <View>
                        <View style={globalStyles.formContainer}>
                            <View style={globalStyles.topTitle}>
                                <TextInput 
                                    style={globalStyles.inputTitle}
                                    maxLength = {24}
                                    onChangeText={props.handleChange('memo')}
                                    value={props.values.memo}
                                    onBlur={props.handleBlur('memo')}
                                />
                                <MaterialIcons 
                                    name='save'
                                    style = {styles.modalSave}
                                    size={40}
                                    onPress={props.handleSubmit}
                                />
                            </View>
                            <TextInput
                                multiline
                                minHeight={250}
                                style={globalStyles.inputDescription}
                                onChangeText={props.handleChange('description')}
                                value={props.values.description}
                                onBlur={props.handleBlur('description')}
                            />
                        </View>       
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    modalSave:{
        color: '#242424',
        width: 60,
        paddingLeft: 10,
        alignSelf: 'flex-end',
        position: 'relative',
        right: 15,
        bottom: 35, 
        left: 5,
    },
    topTitle:{
        flexDirection:'row'
    },
});
