import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Searchbar from '../homecomponents/Searchbar'
import ListingItems from '../homecomponents/ListingItems';

export default function Petscreen({navigation}) {
  const DATA = [
    {
      id: '1',
      productImage: require('../assets/secondimage.png'),
      title: 'Golden Retriever',
      price: '2000',
      location: 'Lahore',
      type: 'Sell'
    },
    {
      id: '2',
      productImage: require('../assets/secondimage.png'),
      title: 'Golden Retriever',
      price: '2000',
      location: 'Lahore',
      type: 'Sell'

    },
    {
      id: '3',
      productImage: require('../assets/secondimage.png'),
      title: 'Golden Retriever',
      price: '2000',
      location: 'Lahore',
      type: 'Sell'

    },
    {
        id: '4',
        productImage: require('../assets/secondimage.png'),
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
      {
        id: '5',
        productImage: require('../assets/secondimage.png'),
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
      {
        id: '6',
        productImage: require('../assets/secondimage.png'),
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
      {
        id: '7',
        productImage: require('../assets/secondimage.png'),
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
      {
        id: '8',
        productImage: require('../assets/secondimage.png'),
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
      {
        id: '9',
        productImage: require('../assets/secondimage.png'),
        title: 'Golden Retriever',
        price: '2000',
        location: 'Lahore',
        type: 'Sell'
      },
      {
        id: '10',
        productImage: require('../assets/secondimage.png'),
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
    <ListingItems productImage={item.productImage} title={item.title} price = {item.price} location = {item.location} type = {item.type} onPress = {() => handleOnPress('petsdetail')}/>
    
  );
  return (
    <View>
      <Searchbar />
      <Text>Petscreen</Text>
      <View style = {styles.list}>
      <FlatList
              
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={2}
              key={item => item.id}
             />
      </View>       
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    alignSelf: 'center'

  }
})