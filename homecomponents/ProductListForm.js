import { StyleSheet, Text, View,TextInput, Pressable, } from 'react-native'
import React from 'react'

export default function ProductListForm() {
  return (
    <View>
      <Text>ProductListForm</Text>
      <TextInput style = {styles.input} placeholder= 'Enter Name'/>
      <TextInput style = {styles.input} placeholder= 'Type'/>
      <TextInput style = {styles.input} placeholder= 'Status'/>
      <TextInput style = {styles.input} placeholder= 'Price'/>
      <TextInput style = {styles.input} placeholder= 'Location'/>
      <TextInput style = {styles.descinput} placeholder= 'description'/>
      <Pressable style = {styles.ButtonContainer}>
        <Text style={styles.ButtonText}>Submit</Text> 
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#E2FC9B',
        marginHorizontal: 15,
        marginVertical: 10
    },

    descinput: {
        backgroundColor: '#E2FC9B',
        marginHorizontal: 15,
        marginVertical: 10,
        height: 100

    },
    ButtonContainer: {
        width: '55%',
        elevation: 2,
        backgroundColor: '#B1E523',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 30,
        marginBottom: 70,
        alignSelf: "center",
    
    },
    ButtonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },


})