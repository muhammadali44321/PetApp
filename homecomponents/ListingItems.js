import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'

export default function ListingItems({productImage,title,price,location,type,onPress}) {
  return (
    <Pressable onPress={onPress}>
        <View style = {styles.item}>
            <Image style = {styles.image} source={productImage}/>
            <View style = {styles.detial}>
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.price}>RS {price}</Text>
            <View style = {styles.location}>
                <Text style = {styles.locationText}>{location}</Text>
                <Text style = {styles.type}>{type}</Text>
            </View>
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    item: {
        width:160,
        height: 180,
        backgroundColor: '#E2FC9B',
        borderRadius: 10,
        marginHorizontal: 15,
        marginBottom: 12

    },
    image: {
        marginTop:10,
        height: 90,
        width: 140,
        alignSelf: 'center',
        borderRadius: 8

    },
    detial: {
        marginHorizontal: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'

    },
    price: {
        color: 'black'
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    locationText: {
        color: 'black'

    },
    type: {
        color: 'black'
    }


})