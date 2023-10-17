import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Searchbar from '../homecomponents/Searchbar'
import ListingItems from '../homecomponents/ListingItems';

export default function Foodscreen({navigation}) {
  const DATA = [
    {
      id: '1',
      title: 'Golden Retriever',
      price: '2000',
      location: 'Lahore',
      type: 'Sell'
    },
    {
      id: '2',
      title: 'Golden Retriever',
      price: '2000',
      location: 'Lahore',
      type: 'Sell'

    },
    {
      id: '3',
      title: 'Golden Retriever',
      price: '2000',
      location: 'Lahore',
      type: 'Sell'

    },
    {
        id: '4',
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
      {
        id: '5',
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
      {
        id: '6',
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
      {
        id: '7',
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
      {
        id: '8',
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
      {
        id: '9',
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
      {
        id: '10',
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
  ];
  const handleOnPress = (screenName) => {
    navigation.navigate(screenName)
}
  const renderItem = ({ item }) => (
    <ListingItems title={item.title} price = {item.price} location = {item.location} type = {item.type} onPress = {() => handleOnPress('petsdetail')}/>
    
  );
  return (
    <View>
      <Searchbar />
      <Text>Foodscreen</Text>
      <FlatList
              
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={2}
              key={item => item.id}
             />
    </View>
  )
}

const styles = StyleSheet.create({})