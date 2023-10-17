import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Expertlist({onPress}) {
  return (
    <Pressable onPress={onPress}>
    <View style = {styles.container}>
      <View style = {styles.container2}>
        <Image style = {styles.image} source={require('../assets/hospital.png')}/>
        <View style = {styles.bar}></View>
        <View>
          <Text style = {styles.title}>Ali pets Services</Text>
          <Text style = {styles.subtitle}>Vertinary Doctor</Text>
        </View>
      </View>
      <View style = {styles.address}>
        <Icon name='clinic-medical' size={25} color = 'black'/>
        <Text style = {styles.addresstext}>BOR Johar Town Johar Town, Lahore</Text>
      </View>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#E2FC9B',
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    title: {
        
        width: 170,
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    subtitle: {
        marginLeft: 20,
        fontSize: 15,
        color: 'black'

    },
    bar: {
        marginTop: 10,
        width: 5,
        height: 70,
        backgroundColor: 'black'
    },
    image: {
        marginTop:10,
        height: 80,
        width: 120,
    
        borderRadius: 8
    },
    address: {
       flexDirection: 'row',
    
       alignItems: 'center',
       
       marginTop: 10
    },

    addresstext: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 20,
        color: 'black'
        
    }
})