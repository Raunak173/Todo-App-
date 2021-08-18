import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function AddTodo({submitHandler}) {

    const [text,setText]=useState('');

    const changeHandler =(val)=>{
        setText(val);
    }

    const inputClear=(text)=>{
        submitHandler(text);
        setText('');
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add a new todo...'
                value={text}
                onChangeText={(val)=>changeHandler(val)}
            />
            <Button 
                title='Add'
                onPress={()=>inputClear(text)}
                color='coral' 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: '5%',
        paddingHorizontal: '3%',
        paddingVertical: '2%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    }
})
