import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'coral',
        padding: 10,
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'   
    }
})

