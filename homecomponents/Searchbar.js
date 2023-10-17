import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Searchbar() {
  return (
    <View style = {styles.container}>
        <Icon name='search' size={30}/>
        <TextInput 
        placeholder='Search item...'
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E0E0E0',
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
        borderRadius: 10,
    }
})