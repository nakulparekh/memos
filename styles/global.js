import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 2,
        
    },
    titleText:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    descriptionText:{
        fontSize: 14,
        color: '#333'
    },
    buttonContainer:{
        // flex: 3,
        justifyContent: 'flex-end',
        padding: 15,
        flexDirection:'column'
    },
    formContainer:{
        justifyContent: 'flex-end',
    },
    deleteContainer:{
        justifyContent: 'flex-end',
        
    },
    paragraph:{
        marginVertical: 8,
        lineHeight: 20,
    },
    inputTitle:{
        paddingLeft:10,
        paddingTop: 10,
        fontSize: 20,
    },
    inputDescription:{
        // borderWidth: 1,
        // borderColor: 'grey',
        paddingLeft:10,
        fontSize: 18,
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlignVertical: 'top',
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center', 
    },
    createText:{
        paddingTop: 10,
        fontSize: 23,
        color: '#333',
        marginBottom: 10,
    }
});