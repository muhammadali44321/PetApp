import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Searchbar from '../homecomponents/Searchbar'
import Expertlist from '../homecomponents/Expertlist'

export default function Expertscreen({navigation}) {
  const DATA = [
    {


    }
  ]
  const handleOnPress = (screenName) => {
    navigation.navigate(screenName)
}
  return (
    <View>
      <Searchbar />
      <Text>Expertscreen</Text>
      <Expertlist onPress = {() => handleOnPress('expertdetail')}/>
      <Expertlist />
      <Expertlist />
    </View>
  )
}

const styles = StyleSheet.create({})