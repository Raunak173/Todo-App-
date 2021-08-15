import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function AddTodo({submitHandler}) {

    const [text,setText]=useState('');

    const changeHandler =(val)=>{
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add a new todo...'
                onChangeText={(val)=>changeHandler(val)}
            />
            <Button 
                title='Add'
                onPress={()=>submitHandler(text)}
                color='coral' 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    }
})
