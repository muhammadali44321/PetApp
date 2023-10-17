import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Serviceoptions({heading,iconname,onPress}) {
    
  return (
    <Pressable onPress={onPress} style = {styles.container}>
        <View style = {styles.iconheading}>
            <Icon name = {iconname} size = {65} color = 'black'/>
            <Text style = {styles.heading}>{heading}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 130,
        height: 100,
        backgroundColor: '#E2Fc9B',
        borderWidth: 5,
        borderColor: '#B1E523',
        borderRadius: 12
    },

    iconheading: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black'

    }

})