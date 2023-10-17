import React from "react";
import { Text,View,StyleSheet,Image,Pressable } from "react-native";
import ListingItems from "./homecomponents/ListingItems";
import Serviceoption from "./homecomponents/Serviceoption";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Listbuttons from "./homecomponents/Listbuttons";

function Listing({navigation}) {
    return(
        <View>
            <Text style = {styles.heading}>List a Product/Service</Text>
            <Pressable onPress={() => {navigation.navigate('Listingform')}}>
            <Listbuttons heading= 'Pets Listing' />
            </Pressable>
            <Listbuttons heading= 'Food Listing' />
            <Listbuttons heading= 'Accesory Listing' />
            <Listbuttons heading= 'Service Listing' />
        </View>
        
    )
}

const styles = StyleSheet.create({
   heading: {
    marginTop: 50,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center'
   }

})


export default Listing;