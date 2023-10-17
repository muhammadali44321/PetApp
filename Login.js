import { StyleSheet, Text, View,TextInput,Pressable } from 'react-native'
import React from 'react'

export default function Login({navigation}) {
  return (
    <View style = {styles.main}>

    <Text style = {styles.heading}>Welcome!</Text>
    
    <View style = {styles.container}>
        <View style = {styles.container2}>
        
          <TextInput style = {styles.input} placeholder='Email' />
           <View style = {styles.bar}></View>
          <TextInput style = {styles.input} placeholder='Password' />
          <View style = {styles.bar}></View>
        </View>
        
        <Pressable onPress={() => {navigation.navigate('MyTabs')}}>
        <View style = {styles.button}>
          <Text style = {styles.signin}>Sign In</Text>
        </View>
        </Pressable>
        
        <Pressable>
        <View style = {styles.button2}>
          <Text style = {styles.signup}>Sign Up</Text>
        </View>
        </Pressable>
       
    </View>
 
</View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#B1E523',
},
heading: {
    fontSize: 30,
    marginTop: 130,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20
},
container: {
    backgroundColor: '#fff',
    height: '70%',
    marginTop: 90,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30

},
input: {
    backgroundColor: '#F0F0F0',
    marginHorizontal: 25,
    marginVertical: 10,
    borderRadius: 10
},
bar: {
    height: 3,
    width: 350,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center'
},
container2: {
    marginTop: 100
},
button: {
  marginTop: 50,
  backgroundColor: '#B1E523',
  marginHorizontal: 25,
  paddingVertical: 15,
  borderRadius: 10
},

signin: {
  alignSelf: 'center',
  fontSize: 20,
  color: '#fff',
  fontWeight: 'bold'
},
button2: {
  marginTop: 20,
  backgroundColor: '#fff',
  marginHorizontal: 25,
  paddingVertical: 15,
  borderRadius: 10,
  borderWidth: 3,
  borderColor: '#B1E523'
},

signup: {
  alignSelf: 'center',
  fontSize: 20,
  color: '#B1E523',
  fontWeight: 'bold'
}

})