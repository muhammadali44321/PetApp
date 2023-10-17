import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Listbuttons({heading}) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>{heading}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#E2FC9B',
        height: 100,
        marginHorizontal: 20,
        borderWidth: 5,
        borderColor: '#B1E523',
        borderRadius: 20,
        elevation: 5
    },
    heading: {
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 20

    }
})