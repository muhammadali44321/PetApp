import React from "react";
import { Text,View,StyleSheet,Image,FlatList } from "react-native";
import ListingItems from "./homecomponents/ListingItems";
import Serviceoption from "./homecomponents/Serviceoption";
import Serviceoptions from "./homecomponents/Serviceoptions";


function Homescreen({navigation}) {

    const DATA = [
        {
          id: '1',
          productImage: require('./assets/secondimage.png'),
          title: 'Golden Retriever',
          price: '2000',
          location: 'Lahore',
          type: 'Sell'
        },
        {
          id: '2',
          productImage: require('./assets/secondimage.png'),
          title: 'Golden Retriever',
          price: '2000',
          location: 'Lahore',
          type: 'Sell'

        },
        {
          id: '3',
          productImage: require('./assets/secondimage.png'),
          title: 'Golden Retriever',
          price: '2000',
          location: 'Lahore',
          type: 'Sell'

        },
        {
            id: '4',
            productImage: require('./assets/secondimage.png'),
            title: 'Golden Retriever',
            price: '2000',
            location: 'Lahore',
            type: 'Sell'
          },
      ];
      const renderItem = ({ item }) => (
        <ListingItems productImage={item.productImage} title={item.title} price = {item.price} location = {item.location} type = {item.type}/>
        
      );
      const handleOnPress = (screenName) => {
        navigation.navigate(screenName)
    }
    return(
        <View style = {styles.main}>
            <View style = {styles.container}>
             <Text style = {styles.heading}>Animal Land</Text>
            </View>
            <Text style = {styles.text2}>Are you looking for</Text>
            <View style = {styles.options}>

                <Serviceoption heading= 'Pets' iconname = 'pets' onPress = {() => handleOnPress('petscreen')}/>
                <Serviceoption heading= 'Accessories' iconname = 'shopping-cart' onPress = {() => handleOnPress('accessoryscreen')}/>
            </View>
            <View style = {styles.options}>    
                <Serviceoption heading= 'Vets/Experts' iconname = 'medical-services' onPress = {() => handleOnPress('expertscreen')}/>
                <Serviceoptions heading= 'Animal Food' iconname = 'bone' onPress = {() => handleOnPress('foodscreen')}/>

            </View>
            <Text style = {styles.text}>Recently Uploaded Pets</Text>
           
            <FlatList
              horizontal
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
             />
            
            <View style = {styles.imgcont}>
            </View>
            


        </View>
        
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        
       
    },
    container: {
        width: "100%",
        height: "30%",
        // upper: 0,
        // position: 'absolute',
        backgroundColor: '#B1E523',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center',
    },
    heading: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 40,

    },

    text: {
        marginLeft: 20,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 15
       
    },
    text2: {
        marginLeft: 20,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 15

    },

    imgcont: {
        marginLeft: 20,
        width: '85%',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    options: {
        flexDirection: 'row',
        
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 320,
        height: 120,
        marginHorizontal: 40

    },
})

export default Homescreen;